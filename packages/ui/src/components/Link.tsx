import * as React from "react";
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  external?: boolean;
  color?:
    | "error"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary";
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({
  external = false,
  to,
  color,
  children,
}) => (
  <MuiLink
    component={external ? "a" : RouterLink}
    {...(external
      ? { href: to, target: "_blank", rel: "noopener noreferrer" }
      : { to })}
    color={color}
  >
    {children}
  </MuiLink>
);

export default Link;
