import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { PeopleOutline } from "@material-ui/icons";
import React from "react";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <CardContent>
          <Box>
            <PeopleOutline className={styles.cardIcon} />
            <Typography variant="subtitle2" color="textSecondary">
              Patients
            </Typography>
          </Box>
        </CardContent>
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
