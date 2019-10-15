import * as React from "react";

import { Box, Table as MuiTable } from "@material-ui/core";

import TableHead, { TableHeadColumn } from "./TableHead";
import TableBody, { TableBodyColumn } from "./TableBody";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSidePagination from "../hooks/useClientSidePagination";
import useClientSideSorting, {
  TableColumnSortable,
} from "../hooks/useClientSideSorting";

export type TableClientSideColumn<R extends {}> = TableBodyColumn<R> &
  TableHeadColumn;

export type TableClientSideProps<R extends {}> = {
  columns: (
    | TableClientSideColumn<R>
    | (TableClientSideColumn<R> & TableColumnSortable<R>))[];
  rows: R[];
};

function isSortableColumn<R extends {}>(
  arg: any
): arg is TableClientSideColumn<R> & TableColumnSortable<R> {
  return arg.comparator !== undefined;
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
