import { useSearch } from "@/hooks/useSearch";
import { Text } from "@chakra-ui/react";

export function Stats() {
  const { store } = useSearch();
  if (store.response === undefined) {
    return null;
  }

  return (
    <Text>
      {plural(store.response.total, "result")} in {store.transitTime}ms
    </Text>
  );
}

function plural(n: number, unit: string) {
  return `${n} ${unit}${n === 1 ? "" : "s"}`;
}
