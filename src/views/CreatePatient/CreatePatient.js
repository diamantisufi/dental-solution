import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Tooltip,
  Button,
} from "@material-ui/core";
import { Close, KeyboardBackspaceOutlined } from "@material-ui/icons";
import React, { Fragment } from "react";
import styles from "./CreatePatient.module.scss";
const CreatePatient = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Box mb={3}>
          <Tooltip title="Back">
            <Button startIcon={<KeyboardBackspaceOutlined />}> Back</Button>
          </Tooltip>
        </Box>

        <Paper>
          <Box className={styles.header}>
            <Typography variant="h6" color="textSecondary">
              Create new Patient
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
              <Grid item xs="6" className={styles.grid}>
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
                    id="firstname"
                    name="firstname"
                    label="Date of Birth"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Telephone"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>

                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Residency"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs="6">
                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Place of Birth"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Date of Birth"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
                <Box className={styles.textfield}>
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="Telephone"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default CreatePatient;
