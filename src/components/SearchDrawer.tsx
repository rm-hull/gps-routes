import { Facets } from "./search/Facets";
import { ClearRefinements } from "./search/ClearRefinements";
import { Stats } from "@/components/search/Stats";
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
        color="var(--chakra-colors-color-palette-fg)"
        background="color-mix(in srgb, var(--chakra-colors-bg-panel) 60%, transparent)"
      >
        <DrawerHeader>
          <DrawerTitle>
            Search Facets
            <ClearRefinements />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody spaceY={2}>
          <Facets />
        </DrawerBody>
        <DrawerFooter>
          <Stats />
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
