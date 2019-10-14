import * as React from "react";
import {
  TableHead as MuiTableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Tooltip,
  Badge,
} from "@material-ui/core";
import { Help } from "@material-ui/icons";

export interface TableHeadColumn {
  id: string;
  label: string;
  isSortable?: boolean;
  tooltip?: React.ReactElement;
}

// type ColumnGroup = {
//   id: string;
//   label: string;
//   colspan: number;
// };

// type ColumnFilter = {};

export type SortBy = {
  columnId: string;
  direction: "asc" | "desc";
};

export type TableHeadProps = {
  // columnGroups?: ColumnGroup[];
  columns: TableHeadColumn[];
  // columnFilters?: ColumnFilter[];
  sortBy?: SortBy;
};

const TableHead: React.FC<TableHeadProps> = ({ columns, sortBy }) => (
  <MuiTableHead>
    {/* TODO: add columnGroups rendering */}
    <TableRow>
      {columns.map((column, columnIndex) => (
        <TableCell key={columnIndex}>
          {sortBy && column.isSortable ? (
            <TableSortLabel
              active={column.id === sortBy.columnId}
              direction={sortBy.direction}
              // onClick={this.selectSortColumn.bind(null, column.id)}
            >
              {column.tooltip ? (
                <Badge
                  badgeContent={
                    <Tooltip title={column.tooltip} placement="top" interactive>
                      <Help />
                    </Tooltip>
                  }
                >
                  {column.label}
                </Badge>
              ) : (
                column.label
              )}
            </TableSortLabel>
          ) : (
            column.label
          )}
        </TableCell>
      ))}
    </TableRow>
    {/* TODO: add columnFilters rendering */}
  </MuiTableHead>
);

export default TableHead;
