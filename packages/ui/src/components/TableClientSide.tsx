import * as React from "react";

import { Box, Table as MuiTable } from "@material-ui/core";

import TableHead, { TableHeadColumn } from "./TableHead";
import TableBody, { TableBodyColumn } from "./TableBody";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSidePagination from "../hooks/useClientSidePagination";

// export type TableClientSideProps<
//   C extends TableBodyColumn & TableHeadColumn = TableBodyColumn &
//     TableHeadColumn
// > = {
//   columns: C[];
//   rows: {}[];
// };

export type TableClientSideProps = {
  columns: (TableBodyColumn & TableHeadColumn)[];
  rows: {}[];
};

const TableClientSide: React.FC<TableClientSideProps> = ({ columns, rows }) => {
  const {
    rowsOnPage,
    tableClientSidePaginationProps,
  } = useClientSidePagination(rows);
  return (
    <React.Fragment>
      <MuiTable>
        <TableHead columns={columns} />
        <TableBody columns={columns} rows={rowsOnPage} />
      </MuiTable>
      <Box justifyContent="flex-end">
        <TableClientSidePagination {...tableClientSidePaginationProps} />
      </Box>
    </React.Fragment>
  );
};

export default TableClientSide;
