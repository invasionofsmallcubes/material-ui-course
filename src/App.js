import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyles: {
    color: "green"
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography
        className={classes.helloThereStyle}
        variant="h1"
        color="primary"
      >
        Hello there
      </Typography>
      <Button
        className={classes.buttonStyles}
        variant="outlined"
        color="primary"
      >
        This is our first button
      </Button>
    </div>
  );
}
