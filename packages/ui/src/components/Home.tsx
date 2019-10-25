import * as React from "react";
import { Box } from "@material-ui/core";

type HomeProps = {
  menu?: React.ReactNode;
  children: React.ReactNode;
};

const Home: React.FC<HomeProps> = ({ menu, children }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    color="white"
    bgcolor="primary.main"
    height="100vh"
  >
    {menu ? (
      <Box position="absolute" p={2} style={{ top: 0, right: 0 }}>
        {menu}
      </Box>
    ) : null}
    {children}
  </Box>
);

export default Home;
