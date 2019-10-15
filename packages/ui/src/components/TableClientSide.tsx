import * as React from "react";

import { Box, Table as MuiTable } from "@material-ui/core";

import TableHead, { TableHeadColumn } from "./TableHead";
import TableBody, { TableBodyColumn } from "./TableBody";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSidePagination from "../hooks/useClientSidePagination";
import useClientSideSorting, {
  TableColumnSortable,
} from "../hooks/useClientSideSorting";

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

const TableClientSide: <T extends {}>(
  props: TableClientSideProps<T>
) => React.ReactElement | null = ({ columns, rows }) => {
  const sortableColumns = columns.filter(isSortableColumn);
  const { sortedRows, sortBy, setSortBy } = useClientSideSorting(
    rows,
    sortableColumns
  );
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
  const {
    rowsOnPage,
    tableClientSidePaginationProps,
  } = useClientSidePagination(sortedRows);
  return (
    <React.Fragment>
      <MuiTable>
        <TableHead {...{ columns: columnsWithSortHandlers, sortBy }} />
        <TableBody columns={columns} rows={rowsOnPage} />
      </MuiTable>
      <Box justifyContent="flex-end">
        <TableClientSidePagination {...tableClientSidePaginationProps} />
      </Box>
    </React.Fragment>
  );
};

export default TableClientSide;
