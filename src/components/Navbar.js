import React from "react";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, ThemeProvider } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Cinzel Decorative",
    fontSize: 20,
    letterSpacing: 2,
    color: "#403C34",
    fontWeight: "bold",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="transparent"
          style={{
            boxShadow: "0px 0px 0px 0px",
          }}
        >
          <Toolbar>
            <Typography className={classes.title}>Maxwell & Skinner</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
