import { useSearch } from "@/hooks/useSearch";
import { List } from "@chakra-ui/react";

type RefinementListProps = {
  attribute: string;
  showMore?: boolean;
  showMoreLimit?: number;
};

export function RefinementList({
  attribute,
}: // showMore = false,
// showMoreLimit = 10,
RefinementListProps) {
  const { store } = useSearch();

  return (
    <List.Root>
      {Object.entries(store?.response?.facets[attribute] ?? [])
        .sort(byDescendingValue)
        .map(([value, count]) => (
          <List.Item key={value}>
            {value} ({count})
          </List.Item>
        ))}
    </List.Root>
  );
}

function byDescendingValue(a: [string, number], b: [string, number]) {
  return b[1] - a[1];
}
