import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./views/landing";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Route path="/"></Route>
    </Router>
  );
}

export default App;
