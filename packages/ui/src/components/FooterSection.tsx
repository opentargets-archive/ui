import * as React from "react";
import { Grid, Typography } from "@material-ui/core";

type Props = {
  title: string;
  children: React.ReactNode[];
};

const FooterSection: React.FC<Props> = ({ title, children }) => (
  <Grid item container xs={12} sm={6} md={3}>
    <Grid item xs={12}>
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    </Grid>
    {children.map((child, i) => (
      <Grid key={i} item xs={12}>
        {child}
      </Grid>
    ))}
  </Grid>
);

export default FooterSection;
