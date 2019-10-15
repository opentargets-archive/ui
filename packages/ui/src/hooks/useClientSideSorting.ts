import { useState } from "react";

import { TableHeadColumn } from "../components/TableHead";
import { TableBodyColumn } from "../components/TableBody";

export type RowComparator<R extends {}> = (a: R, b: R) => number;

export type TableColumnSortable<R extends {}> = {
  id: string;
  comparator: RowComparator<R>;
};

export interface SortBy {
  columnId: string;
  direction: "asc" | "desc";
}

export type TableClientSideColumnUnsortable<R extends {}> = TableBodyColumn<R> &
  TableHeadColumn;

export type TableClientSideColumnSortable<
  R extends {}
> = TableClientSideColumnUnsortable<R> & TableColumnSortable<R>;

export type TableClientSideColumn<R extends {}> =
  | TableClientSideColumnUnsortable<R>
  | TableClientSideColumnSortable<R>;

export type TableClientSideProps<R extends {}> = {
  columns: (TableClientSideColumn<R>)[];
  rows: R[];
};

function isSortableColumn<R extends {}>(
  arg: TableClientSideColumn<R>
): arg is TableClientSideColumnSortable<R> {
  return arg.hasOwnProperty("comparator");
}

const useClientSideSorting = <R extends {}>(
  rows: R[],
  columns: TableClientSideColumn<R>[]
) => {
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined);

  const sortableColumns = columns.filter(isSortableColumn);

  let sortedRows, column;
  if (
    sortBy &&
    (column = sortableColumns.find(c => c.id === sortBy.columnId))
  ) {
    const { comparator: ascendingComparator } = column;
    const directionalComparator: RowComparator<R> = (a, b) =>
      sortBy.direction === "asc"
        ? ascendingComparator(a, b)
        : -1 * ascendingComparator(a, b);
    sortedRows = rows.slice().sort(directionalComparator);
  } else {
    sortedRows = rows;
  }

  const columnsWithSortHandlers = columns.map(c => {
    const columnId = c.id;
    if (isSortableColumn(c)) {
      const handleColumnClick = () => {
        const direction =
          sortBy && columnId === sortBy.columnId && sortBy.direction === "desc"
            ? "asc"
            : "desc";
        setSortBy({ columnId, direction });
      };
      return { ...c, isSortable: true, handleColumnClick };
    } else {
      return { ...c, isSortable: false };
    }
  });

  return {
    sortedRows,
    sortBy,
    columnsWithSortHandlers,
  };
};

export default useClientSideSorting;
