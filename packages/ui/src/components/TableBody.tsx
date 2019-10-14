import * as React from "react";
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export type TableBodyColumn<R extends {}> = {
  id: string;
  label: string;
  renderCell?: (d: R) => React.ReactElement | string | null;
};

export type TableBodyProps<R extends {}> = {
  columns: (TableBodyColumn<R>)[];
  rows: R[];
};

const TableBody: <T extends {}>(
  props: TableBodyProps<T>
) => React.ReactElement | null = ({ columns, rows }) => (
  <MuiTableBody>
    {rows.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {columns.map((column, columnIndex) => (
          <TableCell key={columnIndex}>
            {column.renderCell ? column.renderCell(row) : row[column.id]}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </MuiTableBody>
);

export default TableBody;
