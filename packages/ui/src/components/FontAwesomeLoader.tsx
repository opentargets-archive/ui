import * as React from "react";
import { loadCSS } from "fg-loadcss/src/loadCSS";

export type Props = {
  children: React.ReactNode;
};

const FontAwesomeLoader: React.FC<Props> = ({ children }) => {
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default FontAwesomeLoader;
