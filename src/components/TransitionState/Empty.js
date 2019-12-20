import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import VideogameAssetTwoToneIcon from "@material-ui/icons/VideogameAssetTwoTone";

import StateContainer from ".";
import messages from "../../messages";
const { transitionStateMessages } = messages;

const useStyles = makeStyles(theme => ({
  icon: {
    margin: "auto",
    fontSize: 120
  }
}));

const EmptyState = props => {
  const classes = useStyles();

  return (
    <StateContainer>
      <VideogameAssetTwoToneIcon className={classes.icon} />
      <div>
        <Typography
          color="textSecondary"
          className={classes.title}
          variant="caption"
          noWrap
        >
          {transitionStateMessages.emptyMessage}
        </Typography>
      </div>
    </StateContainer>
  );
};

export default EmptyState;
