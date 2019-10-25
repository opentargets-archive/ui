import * as React from "react";
import { Box, Typography } from "@material-ui/core";

import Link from "./Link";

export type FooterSectionLinkProps = {
  url: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
};

const FooterSectionLink: React.FC<FooterSectionLinkProps> = ({
  icon,
  url,
  label,
}) => (
  <Typography color="inherit" variant="caption">
    {icon ? <Box mr={1}>icon</Box> : null}
    <Link external to={url} color="inherit">
      {label}
    </Link>
  </Typography>
);

export default FooterSectionLink;
