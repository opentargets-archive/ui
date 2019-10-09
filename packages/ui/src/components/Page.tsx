import * as React from "react";
import { Grid } from "@material-ui/core";

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ header, footer, children }) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignContent="stretch"
    justify="space-between"
    style={{ minHeight: "100vh" }}
  >
    {header ? (
      <Grid item xs={12}>
        {header}
      </Grid>
    ) : null}
    <Grid item xs={12}>
      {children}
    </Grid>
    {footer ? (
      <Grid item xs={12}>
        {footer}
      </Grid>
    ) : null}
  </Grid>
);

export default Page;
