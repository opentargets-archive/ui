import * as React from "react";
import { AppBar, Toolbar, Box, Typography, Hidden } from "@material-ui/core";

import OpenTargetsIcon from "../icons/OpenTargets";

type Props = {
  platformName: string;
  search?: React.ReactNode;
  menu?: React.ReactNode;
};

const Header: React.FC<Props> = ({ platformName, search, menu }) => (
  <AppBar position="static" color="primary" elevation={0}>
    <Toolbar variant="dense">
      <Box flexGrow={1} flexDirection="row">
        <Box display="flex" alignItems="center">
          <Box mr={1}>
            <OpenTargetsIcon />
          </Box>
          <Typography variant="h6" color="inherit">
            <span style={{ fontWeight: 1100 }}>Open Targets</span>{" "}
            <span style={{ fontWeight: 300 }}>{platformName}</span>
          </Typography>
        </Box>
      </Box>
      {search ? <Hidden xsDown>{search}</Hidden> : null}
      {menu ? menu : null}
    </Toolbar>
  </AppBar>
);

export default Header;
