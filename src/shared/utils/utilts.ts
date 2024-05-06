import { FilterStatus } from "shared/types/FilterStatus";

export const getFilterStatus = (status: string): FilterStatus => {
  switch (status) {
    case "all":
      return FilterStatus.all;
    case "incomplete":
      return FilterStatus.incomplete;
    case "complete":
      return FilterStatus.complete;

    default:
      return FilterStatus.all;
  }
};
