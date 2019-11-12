import * as React from "react";
import { Box, Grid } from "@material-ui/core";
import { SectionProps } from "./Section";

type SectionType = React.ReactElement<SectionProps>;
type SectionsType = React.ReactElement<SectionProps>[];

type Props = {
  // TODO: try to find a way to reject children
  //       by type and not just by props
  children: SectionType | SectionsType;
};

function isSectionsType(
  children: SectionType | SectionsType
): children is SectionsType {
  return children instanceof Array;
}

const SectionContainer: React.FC<Props> = ({ children }) => (
  <Box m={2}>
    <Grid container spacing={2}>
      {isSectionsType(children) ? (
        children.map((child, i) => (
          <Grid key={i} item xs={12}>
            {child}
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  </Box>
);

export default SectionContainer;
