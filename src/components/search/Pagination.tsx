import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  // PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { useSearch } from "@/hooks/useSearch";

type PaginationProps = {
  scrollToTop?: () => void;
};

export function Pagination({ scrollToTop }: PaginationProps) {
  const { store, goto } = useSearch();

  const page = Math.floor(store?.request?.offset / store?.request?.limit) + 1;

  return (
    <PaginationRoot
      size="xs"
      variant="subtle"
      count={store?.response?.total || 0}
      pageSize={store?.request?.limit}
      page={page}
      onPageChange={(e) => {
        scrollToTop?.();
        goto((e.page - 1) * store?.request?.limit);
      }}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
}
