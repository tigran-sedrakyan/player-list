import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import StateContainer from ".";

const LoadingState = props => {
  return (
    <StateContainer>
      <CircularProgress />
    </StateContainer>
  );
};

export default LoadingState;
