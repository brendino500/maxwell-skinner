import React from "react";
import theme from "../theme";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "40%",
      zIndex: 1,
    },
  },
  text: {
    fontFamily: "PT serif",
    fontSize: 18,
    margin: 15,
    [theme.breakpoints.between("xs", "sm")]: {
      // marginTop: "40%",
      zIndex: 1,
    },
  },
  inputText: {
    fontFamily: "PT serif",
    fontSize: 20,
    letterSpacing: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      zIndex: 1,
    },
  },
  input: {
    display: "flex",
    margin: 15,
    [theme.breakpoints.between("xs", "sm")]: {
      zIndex: 1,
    },
  },
  button: {
    width: 200,
    fontFamily: "PT serif",
    fontSize: 18,
    letterSpacing: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 140,
      zIndex: 1,
    },
  },
  textField: {
    fontFamily: "PT serif",
    fontSize: 18,
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
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
            Want to be one of the firsts to know? Enter your email below and
            we'll add you to our exclusive list and invite you to our launch
            party...
          </Typography>
        </Grid>
        <form>
          <div className={classes.input}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                classes: {
                  root: classes.inputText,
                  focused: classes.inputText,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.inputText,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Yes!
            </Button>
          </div>
        </form>
      </Container>
    </ThemeProvider>
  );
}
