import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66806A",
      light: "#B4C6A6",
    },
    secondary: {
      main: "#FFF1AF",
    },
  },
  typography: {
    tab: {
      textTransform: "none !important",
      fontWeight: "700 !important",
      fontSize: "1rem !important",
    },
    myButton: {
      fontSize: "1rem !important",
    },
  },
});

export default theme;
