import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

type Props = {
  platformName: string;
};

const Header: React.FC<Props> = ({ platformName }) => (
  <AppBar position="static" color="primary" elevation={0}>
    <Toolbar variant="dense">
      <Typography>Open Targets {platformName}</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
