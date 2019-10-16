import * as React from "react";
import { Select, MenuItem } from "@material-ui/core";

export type TableClientSideFilterProps = {
  placeholder?: string;
  onFilterChange: (value: string[]) => void;
  filterOptions: {
    label: React.ReactElement | string;
    value: string;
    selected: boolean;
  }[];
};

const TableClientSideFilter: React.FC<TableClientSideFilterProps> = ({
  placeholder = "...",
  filterOptions,
  onFilterChange,
}) => (
  <Select
    multiple
    displayEmpty
    value={filterOptions.filter(o => o.selected).map(o => o.value)}
    onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
      const selected = event.target.value as string[];
      onFilterChange(selected);
    }}
    renderValue={selected => {
      if ((selected as string[]).length === 0) {
        return <em>{placeholder}</em>;
      }

      return (selected as string[]).join(", ");
    }}
  >
    {filterOptions.map(o => (
      <MenuItem key={o.value} value={o.value}>
        {o.label}
      </MenuItem>
    ))}
  </Select>
);

export default TableClientSideFilter;
