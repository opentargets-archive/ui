import * as React from "react";
import { Tooltip, Badge } from "@material-ui/core";
import { Help } from "@material-ui/icons";

type InfoTooltipProps = {
  info: React.ReactNode;
  children: React.ReactNode;
};

const InfoTooltip: React.FC<InfoTooltipProps> = ({ info, children }) => (
  <Badge
    badgeContent={
      <Tooltip title={info} placement="top" interactive>
        <Help />
      </Tooltip>
    }
  >
    {children}
  </Badge>
);

export default InfoTooltip;
