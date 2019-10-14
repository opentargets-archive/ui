import * as React from "react";
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  external?: boolean;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ external = false, to, children }) => (
  <MuiLink
    component={external ? "a" : RouterLink}
    {...(external
      ? { href: to, target: "_blank", rel: "noopener noreferrer" }
      : { to })}
  >
    {children}
  </MuiLink>
);

export default Link;
