import { useLocalStorage } from "@rm-hull/use-local-storage";

export type SearchView = "grid" | "map";

export interface GeneralSettings {
  searchView?: SearchView;
}

type UseGeneralSettingsReturnType = {
  settings: GeneralSettings | undefined;
  updateSettings: (value: GeneralSettings | undefined) => void;
  isLoading: boolean;
};

export function useGeneralSettings(): UseGeneralSettingsReturnType {
  const { value, setValue, isLoading } = useLocalStorage<GeneralSettings>(
    "gps-routes.general-settings"
  );
  return {
    settings: value,
    updateSettings: setValue,
    isLoading,
  };
}
