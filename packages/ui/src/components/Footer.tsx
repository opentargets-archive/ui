import * as React from "react";
import { Grid, Typography } from "@material-ui/core";

type Props = {
  version: string;
};

const Footer: React.FC<Props> = ({ version }) => (
  <Grid container spacing={3} justify="center">
    <Grid item xs={12}>
      <Typography>Version {version}</Typography>
    </Grid>
  </Grid>
);

export default Footer;
