import { saveAs } from "file-saver";

const quoteIfString = (d: any) => (typeof d === "string" ? `"${d}"` : d);

// const asJSONString = <R extends {}>(
//   rows: R[],
//   columns: TableDownloadColumn<R>[]
// ) => {
//   const rowToJSONObject = columns.reduce((acc, column) => column);
//   const rowsArray = rows.map(row => {

//   })

//   // use the full headerMap which contain optional export() function for each header
//   const rowsHeadersOnly = rows.map(row => pick(row, headerMap));
//   return JSON.stringify(rowsHeadersOnly);
// };

const asCSVContentString = <R extends {}>(
  rows: R[],
  columns: TableDownloadColumn<R>[]
) => {
  const separator = ",";
  const lineSeparator = "\n";
  const headersString = columns
    .map(column => quoteIfString(column.label))
    .join(separator);
  const rowsArray = rows.map(row => {
    return columns
      .map(column => quoteIfString(column.valueAccessor(row)))
      .join(separator);
  });
  return [headersString, ...rowsArray].join(lineSeparator);
};

const asTSVContentString = <R extends {}>(
  rows: R[],
  columns: TableDownloadColumn<R>[]
) => {
  const separator = "\t";
  const lineSeparator = "\n";
  const headersString = columns.map(column => column.label).join(separator);
  const rowsArray = rows.map(row =>
    columns.map(column => column.valueAccessor(row)).join(separator)
  );
  return [headersString, ...rowsArray].join(lineSeparator);
};

const formatToMimeType = {
  json: "application/json;charset=utf-8",
  csv: "text/csv;charset=utf-8",
  tsv: "text/tab-separated-values;charset=utf-8",
};

const formatToContentStringGenerator = {
  csv: asCSVContentString,
  tsv: asTSVContentString,
};

const download = <R extends {}>(
  rows: R[],
  columns: TableDownloadColumn<R>[],
  format: "csv" | "tsv",
  filenameStem: string
) => {
  const mimeType = formatToMimeType[format];
  const asContentString = formatToContentStringGenerator[format];
  const contentString = asContentString(rows, columns);
  const blob = new Blob([contentString], {
    type: mimeType,
  });
  saveAs(blob, `${filenameStem}.${format}`);
};

export type TableDownloadColumn<R extends {}> = {
  label: string;
  valueAccessor: (d: R) => string | number | boolean | null;
};

const useClientSideDownload = <R extends {}>(
  rows: R[],
  columns: TableDownloadColumn<R>[],
  filenameStem: string
) => {
  const disabled = rows.length === 0 || columns.length === 0;
  const downloadAsCSV = () => {
    download(rows, columns, "csv", filenameStem);
  };
  const downloadAsTSV = () => {
    download(rows, columns, "tsv", filenameStem);
  };
  return { disabled, downloadAsCSV, downloadAsTSV };
};

export default useClientSideDownload;
