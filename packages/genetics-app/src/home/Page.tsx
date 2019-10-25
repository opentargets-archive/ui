import React from "react";
import { Home, HeaderMenu } from "ui";

import { headerMenuItems } from "../configuration";

const HomePage: React.FC = () => (
  <Home menu={<HeaderMenu items={headerMenuItems} />}>Genetics Home</Home>
);

export default HomePage;
