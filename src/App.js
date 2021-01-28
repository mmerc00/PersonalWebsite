import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Hamburger from "./components/Hamburger";

function App() {
  return (
    <Router>
      {/* <Hamburger /> */}
      <Navbar />
    </Router>
  );
}

export default App;
