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
    alignContent="center"
    justify="space-between"
    style={{ width: "100%", minHeight: "100vh" }}
  >
    <Grid item>{header}</Grid>
    <Grid item>{children}</Grid>
    <Grid item>{footer}</Grid>
  </Grid>
);

export default Page;
