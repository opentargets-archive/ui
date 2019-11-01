import * as React from "react";
import { Button } from "@material-ui/core";

export type TableClientSideDownloadActionsProps = {
  disabled: boolean;
  downloadAsCSV: () => void;
  downloadAsTSV: () => void;
};

const TableClientSideDownloadActions: React.FC<
  TableClientSideDownloadActionsProps
> = ({ disabled, downloadAsCSV, downloadAsTSV }) => {
  return (
    <React.Fragment>
      <Button
        onClick={downloadAsCSV}
        disabled={disabled}
        aria-label="Download as CSV"
      >
        CSV
      </Button>
      <Button
        onClick={downloadAsTSV}
        disabled={disabled}
        aria-label="Download as TSV"
      >
        TSV
      </Button>
    </React.Fragment>
  );
};

export default TableClientSideDownloadActions;
