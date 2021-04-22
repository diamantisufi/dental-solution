import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Route, Switch, useHistory } from "react-router";
import { Dashboard } from "../../views/Dashboard/Dashboard";
import Patients from "../../views/Patients/Patients";
import {
  CalendarTodayOutlined,
  DashboardOutlined,
  PeopleOutline,
} from "@material-ui/icons";
import CreatePatient from "../../views/CreatePatient/CreatePatient";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const sidebarItems = [
  {
    id: "dashboard",
    route: "",
    label: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    id: "patients",
    route: "patients",
    label: "Patients",

    icon: <PeopleOutline />,
  },
  {
    id: "calendar",
    route: "calendar",
    label: "Calendar",

    icon: <CalendarTodayOutlined />,
  },

  {
    id: "appointments",
    route: "appointments",
    label: "Appointments",
    icon: <DashboardOutlined />,
  },
];

export default function Sidebar() {
  const classes = useStyles();
  const history = useHistory();
  const onSidebarItemChange = (e, route) => {
    e.preventDefault();
    history.push(`/${route}`);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {sidebarItems.map(({ id, route, label, icon }) => (
            <ListItem
              button
              key={id}
              onClick={(e) => onSidebarItemChange(e, route)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/patients">
            <Patients />
          </Route>

          <Route path="/patients/create">
            <CreatePatient />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
