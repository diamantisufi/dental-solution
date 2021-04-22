import { SHOW_NOTIFICATION } from "./types";

const notificationAction = (payload) => {
  return {
    type: SHOW_NOTIFICATION,
    payload,
  };
};

export default notificationAction;
