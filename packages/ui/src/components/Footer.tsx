import * as React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

type Props = {
  version: string;
};

const Footer: React.FC<Props> = ({ version }) => (
  <Box m={0} p={3}>
    <Grid container spacing={3} justify="center">
      <Grid item xs={12}>
        <Typography>Version {version}</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
