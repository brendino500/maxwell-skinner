import React from "react";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  TextField,
  Typography,
  ThemeProvider,
  Container,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 800,
  },
  mainText: {
    fontFamily: "Cinzel Decorative",
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 5,
    color: "#403C34",
    margin: 15,
  },
  text: {
    fontFamily: "PT serif",
    fontSize: 18,
    margin: 15,
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography variant="h1" className={classes.mainText}>
          Hello! We're launching pretty soon...
        </Typography>
        <Typography variant="text" className={classes.text}>
          Want to be one of the firsts to know? Enter your email below and we'll
          add you to our exclusive list and invite you to our launch party...
        </Typography>
        {/* <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="Outlined" />
        </form> */}
      </Grid>
    </Container>
  );
}
