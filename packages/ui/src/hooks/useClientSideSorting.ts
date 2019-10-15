import { useState } from "react";

export type RowComparator<R extends {}> = (a: R, b: R) => number;

export interface TableColumnSortable<R extends {}> {
  id: string;
  comparator: RowComparator<R>;
}

export interface SortBy {
  columnId: string;
  direction: "asc" | "desc";
}

const useClientSideSorting = <R extends {}>(
  rows: R[],
  columns: TableColumnSortable<R>[]
) => {
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined);

  let sortedRows, column;
  if (sortBy && (column = columns.find(c => c.id === sortBy.columnId))) {
    const { comparator: ascendingComparator } = column;
    const directionalComparator: RowComparator<R> = (a, b) =>
      sortBy.direction === "asc"
        ? ascendingComparator(a, b)
        : -1 * ascendingComparator(a, b);
    sortedRows = rows.slice().sort(directionalComparator);
  } else {
    sortedRows = rows;
  }

  return {
    sortedRows,
    sortBy,
    setSortBy,
  };
};

export default useClientSideSorting;
