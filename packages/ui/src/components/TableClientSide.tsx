import * as React from "react";

import { Box, Table as MuiTable } from "@material-ui/core";

import TableBody, { TableBodyColumn } from "./TableBody";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSidePagination from "../hooks/useClientSidePagination";

type TableClientSideProps = {
  columns: TableBodyColumn[];
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
        <TableBody columns={columns} rows={rowsOnPage} />
      </MuiTable>
      <Box justifyContent="flex-end">
        <TableClientSidePagination {...tableClientSidePaginationProps} />
      </Box>
    </React.Fragment>
  );
};

export default TableClientSide;
