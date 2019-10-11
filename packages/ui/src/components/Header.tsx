import * as React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";

type Props = {
  platformName: string;
  search?: React.ReactNode;
  menu?: React.ReactNode;
};

const Header: React.FC<Props> = ({ platformName, search, menu }) => (
  <AppBar position="static" color="primary" elevation={0}>
    <Toolbar variant="dense">
      <Box flexGrow={1}>
        <Typography variant="h6" color="inherit">
          Open Targets {platformName}
        </Typography>
      </Box>
      {search ? search : null}
      {menu ? menu : null}
    </Toolbar>
  </AppBar>
);

export default Header;
