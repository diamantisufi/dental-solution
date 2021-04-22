import { Box, Card, CardHeader, Container } from "@material-ui/core";
import React from "react";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <CardHeader
          title="Patients"
          subheader="September 14, 2016"
        ></CardHeader>
      </Card>
      <Card className={styles.card}>
        <CardHeader
          title="Appointments"
          subheader="September 14, 2016"
        ></CardHeader>
      </Card>
      <Card className={styles.card}>
        <CardHeader
          title="Calendar"
          subheader="September 14, 2016"
        ></CardHeader>
      </Card>
    </Box>
  );
};
