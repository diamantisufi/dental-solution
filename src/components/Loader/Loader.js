import { CircularProgress } from "@material-ui/core";
import React from "react";
import styles from "./Loader.module.scss";
export const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
};
