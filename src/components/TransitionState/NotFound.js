import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedTwoToneIcon from "@material-ui/icons/SentimentDissatisfiedTwoTone";

import StateContainer from ".";
import messages from "../../messages";
const { transitionStateMessages } = messages;

const useStyles = makeStyles(theme => ({
  icon: {
    margin: "auto",
    fontSize: 120
  }
}));

const NotFoundState = props => {
  const classes = useStyles();

  return (
    <StateContainer>
      <SentimentDissatisfiedTwoToneIcon className={classes.icon} />
      <div>
        <Typography
          color="textSecondary"
          className={classes.title}
          variant="caption"
          noWrap
        >
          {transitionStateMessages.notFoundMessage}
        </Typography>
      </div>
    </StateContainer>
  );
};

export default NotFoundState;
