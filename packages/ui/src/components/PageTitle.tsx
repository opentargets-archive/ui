import * as React from "react";
import { Box, Typography } from "@material-ui/core";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  avatar?: React.ReactNode;
  menu?: React.ReactNode;
};

const PageTitle: React.FC<Props> = ({ title, subtitle, avatar, menu }) => (
  <Box m={2} flexGrow={1} flexDirection="row">
    <Box display="flex" alignItems="center">
      {avatar ? <Box m={1}>{avatar}</Box> : null}
      <Box ml={1}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        {subtitle ? <Typography component="h2">{subtitle}</Typography> : null}
      </Box>
    </Box>
    {menu ? <Box>{menu}</Box> : null}
  </Box>
);

export default PageTitle;
