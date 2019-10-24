import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { grey } from "@material-ui/core/colors";

const SPACING = 8;
const PRIMARY = "#3489ca";
const SECONDARY = "#ff6350";

const theme: ThemeOptions = {
  shape: {
    borderRadius: 0,
  },
  typography: {
    // useNextVariants: true,
    fontFamily: '"Inter", "serif"',
  },
  palette: {
    primary: {
      // light: lighten(0.2, PRIMARY),
      main: PRIMARY,
      // dark: darken(0.2, PRIMARY),
      // contrastText: '#fff',
    },
    secondary: {
      // light: lighten(0.2, SECONDARY),
      main: SECONDARY,
      // dark: darken(0.2, SECONDARY),
      // contrastText: '#fff',
    },
    // text: {
    //   primary: '#5A5F5F',
    // },
  },
  // sectionPadding: '8px',
  // widgetHeight: '250px',
  props: {
    //   MuiTab: {
    //     disableRipple: true,
    //   },
    MuiCard: {
      elevation: 0,
    },
    MuiChip: {
      variant: "outlined",
      size: "small",
      // color: "primary",
    },
    MuiTable: {
      size: "small",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiLink: {
      underline: "none",
    },
    MuiPopover: {
      elevation: 0,
    },
    MuiMenuItem: {
      dense: true,
    },
  },
  overrides: {
    //   MuiButton: {
    //     root: {
    //       borderRadius: 0,
    //       border: 0,
    //       padding: '6px 12px',
    //       minWidth: '32px',
    //       minHeight: '32px',
    //       height: '32px',
    //       textTransform: 'none',
    //     },
    //   },
    MuiMenu: {
      paper: {
        border: `1px solid ${grey[300]}`,
      },
      list: {
        padding: 0,
      },
    },
    MuiCard: {
      root: {
        border: `1px solid ${grey[300]}`,
      },
    },
    MuiChip: {
      root: {
        margin: `${SPACING / 4}px`,
      },
    },
    MuiCardHeader: {
      root: {
        borderBottom: `1px solid ${grey[300]}`,
      },
    },
    // MuiIconButton: {
    //   root: {
    //     width: "32px",
    //     height: "32px",
    //     padding: "0px",
    //   },
    // },
    MuiTablePagination: {
      root: {
        height: "36px",
        minHeight: "36px",
      },
      toolbar: {
        height: "36px",
        minHeight: "36px",
      },
    },
    //   MuiTabs: {
    //     root: {
    //       borderBottom: '1px solid #616161',
    //     },
    //     indicator: {
    //       display: 'none',
    //     },
    //   },
    //   MuiTab: {
    //     root: {
    //       textTransform: 'none',
    //       minWidth: '10px !important',
    //       '&$selected': {
    //         backgroundColor: PRIMARY,
    //         color: 'white',
    //         '&:hover': { backgroundColor: PRIMARY },
    //       },
    //       '&:hover': { backgroundColor: lighten(0.3, PRIMARY) },
    //     },
    //   },
    //   MuiExpansionPanelSummary: {
    //     root: {
    //       padding: 0,
    //       paddingRight: '32px',
    //       minHeight: 0,
    //       '&$expanded': {
    //         minHeight: 0,
    //         margin: 0,
    //       },
    //     },
    //     content: {
    //       width: '100%',
    //       margin: 0,
    //       '&$expanded': {
    //         margin: 0,
    //       },
    //     },
    //   },
    //   MuiExpansionPanelDetails: {
    //     root: {
    //       padding: 0,
    //       paddingRight: '32px',
    //     },
    //   },
    //   MuiLinearProgress: {
    //     root: {
    //       height: '1px',
    //     },
    //   },
  },
};

export default theme;
