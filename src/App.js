import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Events" component={Events} />
        <Route path="/Achievements" component={Achievements} />
      </Switch>
    </Router>
  );
}

export default App;
