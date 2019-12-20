import React from "react";

import { makeStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import StateContainer from ".";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50
  },
  content: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    textAlign: "center",
    margin: "auto"
  }
}));

const ErrorState = props => {
  const classes = useStyles();
  return (
    <StateContainer>
      <Snackbar
        classes={{ root: classes.root }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={!!props.error}
      >
        <SnackbarContent
          classes={{
            root: classes.content,
            message: classes.message
          }}
          message={props.error && props.error.toString()}
        ></SnackbarContent>
      </Snackbar>
    </StateContainer>
  );
};

export default ErrorState;
