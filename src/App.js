import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Sidebar />
        </Route>
        <Route path="/" component={Sidebar} />
      </Switch>
      <Notification />
    </BrowserRouter>
  );
}

export default App;
