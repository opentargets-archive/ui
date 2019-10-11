import { useState } from "react";

const useClientSidePagination = (rows: {}[], pageSize: number = 10) => {
  const [page, setPage] = useState(0);

  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / pageSize);
  const rowsOnPage = rows.slice(page * pageSize, (page + 1) * pageSize);

  const tableClientSidePaginationProps = {
    totalRows,
    pageSize,
    page,
    totalPages,
    setPage,
  };

  return { rowsOnPage, tableClientSidePaginationProps };
};

export default useClientSidePagination;
