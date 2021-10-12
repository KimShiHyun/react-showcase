import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import NavBar from "./components/Navbar/index";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/react-showcase/" component={Home} />
        <Route exact path="/react-showcase/projects" component={Projects} />
        <Route exact path="/react-showcase/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
