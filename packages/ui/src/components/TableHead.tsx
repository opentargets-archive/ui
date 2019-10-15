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

import { SortBy } from "../hooks/useClientSideSorting";

export type TableHeadColumn = {
  id: string;
  label: string;
  isSortable?: boolean;
  active?: boolean;
  direction?: "asc" | "desc";
  handleColumnClick?: () => void;
  tooltip?: React.ReactElement;
};

// type ColumnGroup = {
//   id: string;
//   label: string;
//   colspan: number;
// };

// type ColumnFilter = {};

export type TableHeadProps = {
  // columnGroups?: ColumnGroup[];
  columns: TableHeadColumn[];
  // columnFilters?: ColumnFilter[];
  sortBy?: SortBy;
};

const TableHead: React.FC<TableHeadProps> = ({ columns }) => (
  <MuiTableHead>
    {/* TODO: add columnGroups rendering */}
    <TableRow>
      {columns.map((column, columnIndex) => (
        <TableCell key={columnIndex}>
          {column.isSortable ? (
            <TableSortLabel
              active={column.active}
              direction={column.direction}
              onClick={column.handleColumnClick}
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
