import { Box, Heading, Link, List, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useSearch } from "@/hooks/useSearch";

type RefinementListProps = {
  attribute: string;
  showMore?: boolean;
  showMoreLimit?: number;
  header?: string;
};

export function RefinementList({
  attribute,
  showMore = false,
  showMoreLimit = 10,
  header,
}: RefinementListProps) {
  const { store, addFacetValue, removeFacetValue } = useSearch();
  const [expanded, setExpanded] = useState(false);

  const availableValues = useMemo(
    () =>
      Object.entries(store?.response?.facets?.[attribute] || []).toSorted(
        byDescendingValue
      ),
    [store?.response?.facets, attribute]
  );

  const selectedValues = new Set(store?.request?.facets?.[attribute] || []);

  if (availableValues.length === 0) {
    return undefined;
  }

  const handleShowMore = () => setExpanded((prev) => !prev);

  const handleCheckChanged =
    (value: string) => (details: { checked: string | boolean }) => {
      const fn = details.checked ? addFacetValue : removeFacetValue;
      fn(attribute, value);
    };

  return (
    <Box>
      {header && <Heading size="sm">{header}</Heading>}
      <List.Root listStyleType="none">
        {availableValues
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
                value={value}
                checked={selectedValues.has(value)}
                onCheckedChange={handleCheckChanged(value)}
                variant="subtle"
                size="sm"
                cursor="pointer"
                truncate
              >
                {value}
              </Checkbox>
              <Text
                fontSize="xs"
                colorPalette="blue"
                color="var(--chakra-colors-color-palette-fg)"
              >
                {count}
              </Text>
            </List.Item>
          ))}
      </List.Root>
      {showMore && availableValues.length > showMoreLimit && (
        <Link fontSize="xs" colorPalette="blue" onClick={handleShowMore}>
          show {expanded ? "less" : "more"}
        </Link>
      )}
    </Box>
  );
}

function byDescendingValue(a: [string, number], b: [string, number]) {
  return b[1] - a[1];
}
