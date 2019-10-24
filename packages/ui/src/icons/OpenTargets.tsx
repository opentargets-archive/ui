import * as React from "react";
import { SvgIcon } from "@material-ui/core";

const OpenTargets = () => (
  <SvgIcon>
    <g transform={`scale(${1 / 3})`}>
      <path d="M7.9,53c-2.2,0-4.1-1-5.5-2.2S0,47.5,0,45.4c0-4.3,3.6-7.7,7.9-7.7h26.6l0,0H53V53L7.9,53z" />
      <path
        d="M34.6,56.6v7.7c0,4.3-3.6,7.7-7.9,7.7c-2.2,0-4.1-1-5.5-2.2c-1.4-1.4-2.4-3.4-2.4-5.5v-7.7
	C18.7,56.6,34.6,56.6,34.6,56.6z"
      />
      <path d="M37.7,15.4V7.7C37.7,3.4,41,0,45.4,0s7.9,3.4,7.9,7.7v7.7H37.7z" />
      <path d="M19,19h45.1c4.3,0,7.7,3.4,7.9,7.7c0,4.3-3.6,7.7-7.9,7.7H41.8H19C19,34.3,19,19,19,19z" />
    </g>
  </SvgIcon>
);

export default OpenTargets;
