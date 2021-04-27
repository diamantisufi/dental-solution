import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Tooltip,
  Button,
  Divider,
} from "@material-ui/core";
import { Check, KeyboardBackspaceOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import styles from "./CreatePatient.module.scss";

export const CreatePatient = () => {
  const history = useHistory();
  return (
    <Container maxWidth="xl" className={styles.container}>
      <Box mb={3}>
        <Tooltip title="Back">
          <Button
            startIcon={<KeyboardBackspaceOutlined />}
            onClick={() => history.goBack()}
          >
            {" "}
            Back
          </Button>
        </Tooltip>
      </Box>

      <Paper>
        <Box className={styles.header}>
          <Typography variant="h6" color="textSecondary">
            Register a new Patient
          </Typography>
        </Box>
        <Grid container>
          <Box
            display="flex"
            justifyContent="space-between"
            padding="1em"
            pt="2em"
            width="100%"
            gridRowGap="1"
          >
            <Grid item xs={6} className={styles.grid}>
              <Box className={styles.textfield}>
                <TextField
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
              <Box className={styles.textfield}>
                <TextField
                  id="date_of_birth"
                  name="date_of_birth"
                  label="Date of Birth"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
              <Box className={styles.textfield}>
                <TextField
                  id="telephone"
                  name="telephone"
                  label="Telephone"
                  variant="outlined"
                  type="number"
                  fullWidth
                ></TextField>
              </Box>

              <Box className={styles.textfield}>
                <TextField
                  id="residency"
                  name="residency"
                  label="Residency"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.textfield}>
                <TextField
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
              <Box className={styles.textfield}>
                <TextField
                  id="place_of_birth"
                  name="place_of_birth"
                  label="Place of Birth"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
              <Box className={styles.textfield}>
                <TextField
                  id="date_of_birth1"
                  name="date_of_birth"
                  label="Date of Birth"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Divider light />
        <Box padding="1rem">
          <Button variant="outlined" color="primary" endIcon={<Check />}>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreatePatient;
