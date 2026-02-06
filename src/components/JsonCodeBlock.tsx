import { CodeBlock, Float, IconButton } from "@chakra-ui/react";
import { HighlighterGeneric } from "shiki";
import { createShikiAdapter } from "@chakra-ui/react";
import { useMemo } from "react";
import { useColorMode } from "./ui/color-mode";

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["json"],
      themes: ["github-light", "github-dark"],
    });
  },
  theme: "github-light",
});

type JsonCodeBlockProps = {
  data: object;
};

export function JsonCodeBlock({ data }: JsonCodeBlockProps) {
  const { colorMode } = useColorMode();
  const formatted = useMemo(() => JSON.stringify(data, null, 2), [data]);

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        size="sm"
        opacity={0.7}
        code={formatted}
        language="json"
        meta={{
          showLineNumbers: true,
          colorScheme: colorMode,
          wordWrap: true,
        }}
      >
        <CodeBlock.Content>
          <CodeBlock.Code>
            <Float placement="top-end" offset="5" zIndex="1">
              <CodeBlock.CopyTrigger asChild>
                <IconButton variant="ghost" size="2xs">
                  <CodeBlock.CopyIndicator />
                </IconButton>
              </CodeBlock.CopyTrigger>
            </Float>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  );
}
