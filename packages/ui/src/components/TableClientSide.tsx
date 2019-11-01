import * as React from "react";

import { Grid, Table as MuiTable } from "@material-ui/core";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableClientSideDownload from "./TableClientSideDownload";
import TableClientSidePagination from "./TableClientSidePagination";
import useClientSideDownload, {
  TableDownloadColumn,
} from "../hooks/useClientSideDownload";
import useClientSidePagination from "../hooks/useClientSidePagination";
import useClientSideSorting, {
  TableClientSideColumn,
} from "../hooks/useClientSideSorting";
import useClientSideFiltering from "../hooks/useClientSideFiltering";

export type TableClientSideProps<R extends {}> = {
  columns: (TableClientSideColumn<R>)[];
  downloadColumns: (TableDownloadColumn<R>)[];
  downloadFilestem: string;
  rows: R[];
};

const TableClientSide: <T extends {}>(
  props: TableClientSideProps<T>
) => React.ReactElement | null = ({
  rows,
  columns,
  downloadColumns,
  downloadFilestem,
}) => {
  const tableClientSideDownloadProps = useClientSideDownload(
    rows,
    downloadColumns,
    downloadFilestem
  );
  const { filteredRows, columnsWithFiltering } = useClientSideFiltering(
    rows,
    columns
  );
  const { sortedRows, columnsWithSorting } = useClientSideSorting(
    filteredRows,
    columnsWithFiltering
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
      <Grid container justify="space-between">
        <Grid item>
          <TableClientSideDownload {...tableClientSideDownloadProps} />
        </Grid>
        <Grid item>
          <TableClientSidePagination {...tableClientSidePaginationProps} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TableClientSide;
