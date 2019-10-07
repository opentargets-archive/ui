import * as React from "react";
import { Grid } from "@material-ui/core";

type Props = {
  header: JSX.Element;
  footer: JSX.Element;
  children: JSX.Element;
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
    <Grid item xs={12}>
      {header}
    </Grid>
    <Grid item xs={12}>
      {children}
    </Grid>
    <Grid item xs={12}>
      {footer}
    </Grid>
  </Grid>
);

export default Page;
