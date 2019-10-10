import * as React from "react";
import { Box } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const ChipContainer: React.FC<Props> = ({ children }) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center">
    {children}
  </Box>
);

export default ChipContainer;
