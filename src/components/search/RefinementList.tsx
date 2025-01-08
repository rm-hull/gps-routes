/* eslint-disable import/order */
import { useSearch } from "@/hooks/useSearch";
import { Link, List, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

type RefinementListProps = {
  attribute: string;
  showMore?: boolean;
  showMoreLimit?: number;
};

export function RefinementList({
  attribute,
  showMore = false,
  showMoreLimit = 10,
}: RefinementListProps) {
  const { store } = useSearch();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded((prev) => !prev);

  const data = Object.entries(store?.response?.facets[attribute] ?? []).sort(
    byDescendingValue
  );

  return (
    <>
      <List.Root listStyleType="none">
        {data
          .slice(0, expanded ? undefined : showMoreLimit)
          .map(([value, count]) => (
            <List.Item
              key={value}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignContent="center"
              gap={2}
              paddingLeft={2}
            >
              <Checkbox
                name={attribute}
                variant="subtle"
                size="sm"
                cursor="pointer"
                // colorPalette="blue"
                truncate
              >
                {value}
              </Checkbox>
              <Text fontSize="xs" color="blue.800">
                {count}
              </Text>
            </List.Item>
          ))}
      </List.Root>
      {showMore && data.length > showMoreLimit && (
        <Link fontSize="xs" colorPalette="blue" onClick={handleClick}>
          show {expanded ? "less" : "more"}
        </Link>
      )}
    </>
  );
}

function byDescendingValue(a: [string, number], b: [string, number]) {
  return b[1] - a[1];
}
