import { TableClientSideColumn } from "../hooks/useClientSideSorting";

const useClientSideFiltering = <R extends {}>(
  rows: R[],
  columns: TableClientSideColumn<R>[]
) => {
  const filteredRows = rows.slice();
  const columnsWithFiltering = columns;

  return { filteredRows, columnsWithFiltering };
};

export default useClientSideFiltering;
