import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#AC8435",
    },
    secondary: {
      main: "#403C34",
    },
    fontFamily: {
      h1: {
        fontSize: 50,
      },
      subtitle2: {
        fontSize: 12,
        letterSpacing: 2,
      },
      text: {
        fontSize: 14,
      },
    },
  },
});

export default theme;
