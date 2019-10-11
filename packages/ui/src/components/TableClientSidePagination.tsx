import * as React from "react";
import { TablePagination } from "@material-ui/core";

import TableClientSidePaginationActions from "./TableClientSidePaginationActions";

type TableClientSidePaginationProps = {
  totalRows: number;
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
};
const TableClientSidePagination: React.FC<TableClientSidePaginationProps> = ({
  totalRows,
  page,
  pageSize,
  setPage,
}) => {
  const handleChangePage = (_: any, newPage: number) => setPage(newPage);
  return (
    <TablePagination
      component="div"
      count={totalRows}
      onChangePage={handleChangePage}
      page={page}
      rowsPerPage={pageSize}
      rowsPerPageOptions={[]}
      ActionsComponent={TableClientSidePaginationActions}
    />
  );
};

export default TableClientSidePagination;
