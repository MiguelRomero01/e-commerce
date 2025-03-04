import { FilterState } from "./filterStateModel";

export interface FilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isFiltering: boolean;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}