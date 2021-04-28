import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Notification from "./components/Notification/Notification";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Sidebar />
          </Route>
          <Route path="/" component={Sidebar} />
        </Switch>
        <Notification />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
