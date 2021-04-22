import React, { useContext } from "react";
import { Snackbar, Button } from "@material-ui/core";
import notificationAction from "../../store/actions/notificationAction";
import { store } from "../../store";

const Notification = () => {
  const { state, dispatch } = useContext(store);
  console.log(state);
  const handleClose = () => {
    dispatch(
      notificationAction({
        open: false,
        message: null,
      })
    );
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={state?.notification.open}
      message={state?.notification.message}
      autoHideDuration={3000}
      onClose={handleClose}
      id="notification"
      action={
        <Button onClick={handleClose} color="secondary" size="small">
          CLOSE
        </Button>
      }
    />
  );
};

export default Notification;
