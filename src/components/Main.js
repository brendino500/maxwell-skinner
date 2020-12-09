import React from "react";
import Info from "./Info";
import image from "../assets/andi-rieger-OhHVGV4EUmA-unsplash.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "97vh",
  },
  imageMobile: {
    position: "Absolute",
    zIndex: 0,
    height: "80vh",
    marginTop: "17%",
    marginLeft: "1%",
    opacity: 0.5,
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Info />
      <Hidden smDown>
        <img src={image} alt="model" className={classes.image} />
      </Hidden>
      <Hidden smUp>
        <img src={image} alt="model" className={classes.imageMobile} />
      </Hidden>
    </Grid>
  );
}
