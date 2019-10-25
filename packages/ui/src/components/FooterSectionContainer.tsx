import * as React from "react";
import { Box, Grid } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

type Props = {
  children: React.ReactNode;
};

const FooterSectionContainer: React.FC<Props> = ({ children }) => (
  <Box m={0} p={3} bgcolor={blueGrey[900]} color="white">
    <Grid container spacing={3} justify="center">
      <Grid item container xs={12} md={10} spacing={2} alignItems="flex-start">
        {children}
      </Grid>
    </Grid>
  </Box>
);

export default FooterSectionContainer;
