import { useState } from "react";
import { uniqBy } from "lodash";
import { TableHeadColumn } from "../components/TableHead";
import { TableBodyColumn } from "../components/TableBody";

export type TableFilter<R extends {}> = {
  labelAccessor: (d: R) => React.ReactElement | string;
  valueAccessor: (d: R) => string;
};

export type TableColumnFilterable<R extends {}> = {
  id: string;
  filter: TableFilter<R>;
};

export type TableClientSideColumnUnfilterable<R extends {}> = TableBodyColumn<
  R
> &
  TableHeadColumn;

export type TableClientSideColumnFilterable<
  R extends {}
> = TableClientSideColumnUnfilterable<R> & TableColumnFilterable<R>;

export type TableClientSideColumnMaybeFilterable<R extends {}> =
  | TableClientSideColumnUnfilterable<R>
  | TableClientSideColumnFilterable<R>;

export function isFilterableColumn<R extends {}>(
  arg: TableClientSideColumnMaybeFilterable<R>
): arg is TableClientSideColumnFilterable<R> {
  return arg.hasOwnProperty("filter");
}

const useClientSideFiltering = <R extends {}>(
  rows: R[],
  columns: TableClientSideColumnMaybeFilterable<R>[]
) => {
  const filterableColumns = columns.filter(isFilterableColumn);
  const filterableColumnIds = filterableColumns.map(c => c.id);
  type FilterColumnIds = typeof filterableColumnIds[number];
  type FilterState = {
    [key in FilterColumnIds]: string[];
  };
  // filtersState is an object with key=columnId, value=(array of selected)
  const [filtersState, setFiltersState] = useState<FilterState>(
    filterableColumnIds.reduce((acc, c) => {
      acc[c] = [];
      return acc;
    }, {})
  );

  let filteredRows: R[];
  // if no filters are set, return all rows
  if (Object.values(filtersState).some(filterState => filterState.length > 0)) {
    filteredRows = rows.slice().filter(r => {
      return filterableColumns.every(filterColumn => {
        // for any column with at least one selected option,
        // need to check if the row matches
        if (filtersState[filterColumn.id].length > 0 && filterColumn.filter) {
          const allowedValues = filtersState[filterColumn.id];
          const rowValue = filterColumn.filter.valueAccessor(r);
          return rowValue ? allowedValues.indexOf(rowValue) >= 0 : false;
        } else {
          return true;
        }
      });
    });
  } else {
    filteredRows = rows;
  }

  const columnsWithFiltering = columns.map(c => {
    if (isFilterableColumn(c)) {
      const uniqueRowsForFilter = uniqBy(filteredRows, c.filter.valueAccessor);
      const filterOptions =
        c.filter &&
        uniqueRowsForFilter
          .map(r => ({
            label: c.filter.labelAccessor(r),
            value: c.filter.valueAccessor(r),
          }))
          .map(o => ({
            ...o,
            selected:
              filtersState && filtersState[c.id].length > 0
                ? filtersState[c.id].indexOf(o.value) >= 0
                : false,
          }));
      const handleFilterChange = (value: string[]) => {
        const newFiltersState = {
          ...filtersState,
          [c.id]: value,
        };
        setFiltersState(newFiltersState);
      };
      return { ...c, isFilterable: true, filterOptions, handleFilterChange };
    } else {
      return { ...c, isFilterable: false };
    }
  });

  return { filteredRows, columnsWithFiltering };
};

export default useClientSideFiltering;
