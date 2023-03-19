import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
