import React, { useReducer, createContext } from "react";
import { FETCH_CURRENT_USER, SHOW_NOTIFICATION } from "../store/actions/types";

const initialState = {
  auth: {
    token: localStorage.getItem("auth_token"),
    isAuthenticated: false,
  },
  notification: {
    open: false,
    message: null,
  },
  user: JSON.parse(localStorage.getItem("user")),
};

const store = createContext(initialState);
const { Provider } = store;
console.log("store: ", store);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SHOW_NOTIFICATION:
        return {
          ...state,
          notification: {
            open: action.payload.open,
            message: action.payload.message,
          },
        };
      case FETCH_CURRENT_USER:
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        return {
          ...state,
          user: action.payload.user,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
