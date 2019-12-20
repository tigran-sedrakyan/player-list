import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80,
    width: "100%",
    textAlign: "center"
  }
}));

const TransitionState = props => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};

export default TransitionState;
