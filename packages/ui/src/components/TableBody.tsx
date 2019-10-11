import * as React from "react";
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

interface Column {
  id: string;
  label: string;
  renderCell?: (...args: any[]) => React.ReactNode;
}

type TableBodyProps = {
  columns: (Column)[];
  rows: {}[];
};

const TableBody: React.FC<TableBodyProps> = ({ columns, rows }) => (
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
