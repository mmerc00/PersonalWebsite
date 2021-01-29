import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import Navbar from "./components/Navbar";
//import Home from "./pages";

function App() {
  return (
    <Router>
      <Hamburger />
      <Navbar />
    </Router>
  );
}

export default App;
