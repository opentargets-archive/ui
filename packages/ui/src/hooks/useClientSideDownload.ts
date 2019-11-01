import { saveAs } from "file-saver";

const quoteIfString = (d: any) => (typeof d === "string" ? `"${d}"` : d);

const asJSONContentString = <R extends {}>(
  rows: R[],
  columns: TableDownloadColumn<R>[]
) => {
  const rowsAsObjectsArray = rows.map(row =>
    columns.reduce((acc, column) => {
      acc[column.label] = column.valueAccessor(row);
      return acc;
    }, {})
  );
  return JSON.stringify(rowsAsObjectsArray);
};

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
  json: asJSONContentString,
  csv: asCSVContentString,
  tsv: asTSVContentString,
};

const download = (
  contentString: string,
  mimeType: string,
  filenameStem: string,
  filenameExtension: string
) => {
  const blob = new Blob([contentString], {
    type: mimeType,
  });
  saveAs(blob, `${filenameStem}.${filenameExtension}`);
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
  const downloadAsCSV = () =>
    download(
      formatToContentStringGenerator.csv(rows, columns),
      formatToMimeType.csv,
      filenameStem,
      "csv"
    );
  const downloadAsTSV = () =>
    download(
      formatToContentStringGenerator.tsv(rows, columns),
      formatToMimeType.tsv,
      filenameStem,
      "tsv"
    );
  const downloadAsJSON = () =>
    download(
      formatToContentStringGenerator.json(rows, columns),
      formatToMimeType.json,
      filenameStem,
      "json"
    );
  return { disabled, downloadAsCSV, downloadAsTSV, downloadAsJSON };
};

export default useClientSideDownload;
