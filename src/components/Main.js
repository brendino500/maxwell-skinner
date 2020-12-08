import React from "react";
import Info from "./Info";
import image from "../assets/andi-rieger-OhHVGV4EUmA-unsplash.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "97vh",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Info />
      <img src={image} alt="model" className={classes.image} />
    </Grid>
  );
}
