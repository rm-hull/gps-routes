import { createListCollection, HStack, IconButton, Select, Text } from "@chakra-ui/react";
import { LuArrowDownAZ, LuArrowUpAZ } from "react-icons/lu";
import { Tooltip } from "@/components/ui/tooltip";
import { useSearch } from "@/hooks/useSearch";
import { SortField } from "@/types";

const SORT_FIELD_LABELS: Record<SortField, string> = {
  distance_km: "Distance",
  difficulty: "Difficulty",
  estimated_duration: "Duration",
  title: "Title",
  relevance: "Relevance",
};

const SORT_FIELDS: SortField[] = ["distance_km", "difficulty", "estimated_duration", "title", "relevance"];

const sortFieldCollection = createListCollection({
  items: SORT_FIELDS.map((f) => ({ label: SORT_FIELD_LABELS[f], value: f })),
});

export function SortControl() {
  const { sort, setSort } = useSearch();

  const field = sort?.field || "relevance";
  const direction = sort?.direction || "DESC";

  return (
    <HStack gap={2}>
      <Text fontSize="xs" color="fg.muted" userSelect="none" minWidth="50px">
        Sort by:
      </Text>
      <Select.Root
        size="xs"
        collection={sortFieldCollection}
        value={[field]}
        onValueChange={(details) => {
          const selected = details.value[0];
          if (selected) setSort(selected as SortField, direction);
        }}
      >
        <Select.Control>
          <Select.Trigger minWidth="100px" border="none" bg="rgba(255,255,255,0.75)">
            <Select.ValueText />
            <Select.Indicator />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content minWidth="100px" bg="rgba(255,255,255,0.75)">
            {sortFieldCollection.items.map((item) => (
              <Select.Item item={item} key={item.value} _hover={{ bg: "var(--chakra-colors-gray-200)" }}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      <Tooltip content={direction === "ASC" ? "Ascending" : "Descending"}>
        <IconButton
          size="xs"
          variant="ghost"
          aria-label={direction === "ASC" ? "Sort descending" : "Sort ascending"}
          onClick={() => setSort(field, direction === "ASC" ? "DESC" : "ASC")}
        >
          {direction === "ASC" ? <LuArrowUpAZ /> : <LuArrowDownAZ />}
        </IconButton>
      </Tooltip>
    </HStack>
  );
}
