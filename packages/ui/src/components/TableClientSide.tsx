import * as React from "react";

import { Box, Table as MuiTable } from "@material-ui/core";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSidePagination from "../hooks/useClientSidePagination";
import useClientSideSorting, {
  TableClientSideColumn,
} from "../hooks/useClientSideSorting";

export type TableClientSideProps<R extends {}> = {
  columns: (TableClientSideColumn<R>)[];
  rows: R[];
};

const TableClientSide: <T extends {}>(
  props: TableClientSideProps<T>
) => React.ReactElement | null = ({ columns, rows }) => {
  // const { filteredRows, filters, } = useClientSideFiltering(
  //   rows,
  //   columns
  // )
  const { sortedRows, columnsWithSorting } = useClientSideSorting(
    rows,
    columns
  );
  const {
    rowsOnPage,
    tableClientSidePaginationProps,
  } = useClientSidePagination(sortedRows);
  return (
    <React.Fragment>
      <MuiTable>
        <TableHead {...{ columns: columnsWithSorting }} />
        <TableBody columns={columns} rows={rowsOnPage} />
      </MuiTable>
      <Box justifyContent="flex-end">
        <TableClientSidePagination {...tableClientSidePaginationProps} />
      </Box>
    </React.Fragment>
  );
};

export default TableClientSide;
