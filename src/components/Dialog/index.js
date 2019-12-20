import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import messages from "../../messages";

const { removeConfirmationModalMessages } = messages;

const ConfirmDialog = props => {
  const { id, handleClose, handleConfirm } = props;
  return (
    <div>
      <Dialog open={!!id} onClose={handleClose}>
        <DialogTitle>
          {removeConfirmationModalMessages.titleMessage}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            {removeConfirmationModalMessages.cancelMessage}
          </Button>
          <Button onClick={() => handleConfirm(id)} color="primary" autoFocus>
            {removeConfirmationModalMessages.confirmMessage}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
