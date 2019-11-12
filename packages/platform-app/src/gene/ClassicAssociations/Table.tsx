import * as React from "react";
import { Card, CardContent, Table as MuiTable } from "@material-ui/core";

import { Section } from "ui";

type Props<R extends {}> = {
  dataTypes: string[];
  rows: R[];
};

const ClassicAssociationsTable: <R extends {}>(
  props: Props<R>
) => React.ReactElement | null = () => (
  <Card>
    <CardContent>TODO: Heatmap</CardContent>
  </Card>
);

export default ClassicAssociationsTable;
