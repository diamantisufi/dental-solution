import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Route path="/"></Route>
    </Router>
  );
}

export default App;
