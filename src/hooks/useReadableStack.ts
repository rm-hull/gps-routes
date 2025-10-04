import { useEffect, useState } from "react";

const STACK_LINE_RE = /\((https?:\/\/.*?):(\d+):(\d+)\)/;

// Simple in-memory cache for source maps so we don't fetch repeatedly
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sourceMapCache = new Map<string, any>();

async function decodeStackTrace(stack: string): Promise<string> {
  const lines = stack.split("\n");
  const decoded: string[] = [];

  // lazy-load source-map only when needed
  const { SourceMapConsumer } = await import("source-map-js");

  for (const line of lines) {
    const match = STACK_LINE_RE.exec(line);
    if (!match) {
      decoded.push(line);
      continue;
    }

    const [, url, lineNum, colNum] = match;

    try {
      const mapUrl = `${url}.map`;
      let rawMap = sourceMapCache.get(mapUrl);
      if (!rawMap) {
        const res = await fetch(mapUrl);
        if (!res.ok) throw new Error("Map not found");
        rawMap = await res.json();
        sourceMapCache.set(mapUrl, rawMap);
      }

      const consumer = new SourceMapConsumer(rawMap);
      const pos = consumer.originalPositionFor({
        line: Number(lineNum),
        column: Number(colNum),
      });

      if (pos.source) {
        const fnName = pos.name ? ` (${pos.name})` : "";
        decoded.push(
          `${line}\n      → ${pos.source}:${pos.line}:${pos.column}${fnName}`
        );
      } else {
        decoded.push(line);
      }
    } catch (e) {
      console.error("Failed to decode stack line", line, e);
      decoded.push(line);
    }
  }

  return decoded.join("\n");
}

export function useReadableStack(error: Error | null) {
  const [stack, setStack] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!error?.stack) return;

    let cancelled = false;
    setStack(error.stack);
    setLoading(true);

    decodeStackTrace(error.stack)
      .then((decoded) => {
        if (!cancelled) setStack(decoded);
      })
      .catch(() => {
        if (!cancelled) setStack(error.stack);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [error]);

  return { stack, loading };
}
