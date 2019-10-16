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

import { isFilterableColumn } from "../hooks/useClientSideFiltering";
import TableClientSideFilter from "./TableClientSideFilter";

export type TableHeadColumn = {
  id: string;
  label: string;
  tooltip?: React.ReactElement;

  // sorting
  isSortable?: boolean;
  active?: boolean;
  direction?: "asc" | "desc";
  handleColumnClick?: () => void;

  // filtering
  isFilterable?: boolean;
  handleFilterChange?: (value: string[]) => void;
  filterOptions?: {
    label: React.ReactElement | string;
    value: string;
    selected: boolean;
  }[];
};

// type ColumnGroup = {
//   id: string;
//   label: string;
//   colspan: number;
// };

export type TableHeadProps = {
  // columnGroups?: ColumnGroup[];
  columns: TableHeadColumn[];
};

const TableHead: React.FC<TableHeadProps> = ({ columns }) => (
  <MuiTableHead>
    {/* TODO: add columnGroups rendering */}
    {/* column labels */}
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
    {/* filters */}
    {columns.some(isFilterableColumn) ? (
      <TableRow>
        {columns.map((column, columnIndex) => (
          <TableCell key={columnIndex}>
            {column.isFilterable &&
            column.handleFilterChange &&
            column.filterOptions ? (
              <TableClientSideFilter
                onFilterChange={column.handleFilterChange}
                filterOptions={column.filterOptions}
              />
            ) : null}
          </TableCell>
        ))}
      </TableRow>
    ) : null}
  </MuiTableHead>
);

export default TableHead;
