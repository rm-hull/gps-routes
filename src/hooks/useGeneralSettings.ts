import { useLocalStorage } from "./useLocalStorage";

export type SearchView = "grid" | "map";

export interface GeneralSettings {
  searchView?: SearchView;
}

type UseGeneralSettingsReturnType = [
  GeneralSettings | undefined,
  (value: GeneralSettings | undefined) => void
];

export function useGeneralSettings(): UseGeneralSettingsReturnType {
  return useLocalStorage<GeneralSettings>("gps-routes.general-settings");
}
