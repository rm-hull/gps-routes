import { ClearRefinements, Stats } from "react-instantsearch";
import { SearchFacets } from "./SearchFacets";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type SearchDrawerProps = {
  trigger: React.ReactNode;
};

export function SearchDrawer({ trigger }: SearchDrawerProps) {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent
        placeContent="flex-start"
        backdropFilter={"blur(10px)"}
        background={`color-mix(in srgb, var(--chakra-colors-bg-panel) 40%, transparent)`}
      >
        <DrawerHeader>
          <DrawerTitle>
            Search Facets
            <ClearRefinements
              translations={{
                resetButtonText: "clear",
              }}
            />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody spaceY={2}>
          <SearchFacets />
        </DrawerBody>
        <DrawerFooter>
          <Stats />
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
