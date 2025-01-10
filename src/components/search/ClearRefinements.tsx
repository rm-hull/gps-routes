import { Link } from "@chakra-ui/react";
import { useSearch } from "@/hooks/useSearch";

export function ClearRefinements() {
  const { resetFacets } = useSearch();

  return (
    <Link
      paddingLeft={2}
      fontSize="xs"
      fontWeight="normal"
      colorPalette="blue"
      onClick={resetFacets}
    >
      clear
    </Link>
  );
}
