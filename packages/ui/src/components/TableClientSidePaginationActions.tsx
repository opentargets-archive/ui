import * as React from "react";
import { IconButton } from "@material-ui/core";
import { TablePaginationActionsProps } from "@material-ui/core/TablePagination/TablePaginationActions";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@material-ui/icons";

const TableClientSidePaginationActions: React.FC<
  TablePaginationActionsProps
> = ({ page, count, rowsPerPage, onChangePage }) => {
  const setPageFirst = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => onChangePage(event, 0);
  const setPagePrevious = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => onChangePage(event, page - 1);
  const setPageNext = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => onChangePage(event, page + 1);
  const setPageLast = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => onChangePage(event, lastPage);

  const lastPage = Math.ceil(count / rowsPerPage) - 1;
  return (
    <React.Fragment>
      <IconButton
        onClick={setPageFirst}
        disabled={page === 0}
        aria-label="First Page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={setPagePrevious}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={setPageNext}
        disabled={page >= lastPage}
        aria-label="Next Page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={setPageLast}
        disabled={page >= lastPage}
        aria-label="Last Page"
      >
        <LastPage />
      </IconButton>
    </React.Fragment>
  );
};

export default TableClientSidePaginationActions;
