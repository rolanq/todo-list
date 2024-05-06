export enum FilterStatus {
  all = "all",
  incomplete = "incomplete",
  complete = "complete",
}

export type FilterStatuses = keyof typeof FilterStatus;
