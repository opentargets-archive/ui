import * as React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { PopoverOrigin } from "@material-ui/core/Popover";

import Link from "./Link";

const anchorOrigin: PopoverOrigin = { vertical: "bottom", horizontal: "right" };
const transformOrigin: PopoverOrigin = { vertical: "top", horizontal: "right" };

export type HeaderMenuProps = {
  items: {
    name: string;
    url: string;
    external: boolean;
  }[];
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        size="medium"
        color="inherit"
        aria-label="open header menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        getContentAnchorEl={null}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {items.map((item, i) => (
          <MenuItem key={i}>
            <Link external={item.external} to={item.url}>
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderMenu;
