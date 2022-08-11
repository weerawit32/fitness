import React from "react";
// import { useEffect, useState } from "react";
// import { fetchData, options } from "./utils/fetchData";
import { Home } from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my gym</h1>
      {/* <Routes> */}
      {/* <Route path="/" element={} /> */}
      {/* </Routes> */}
      <Home />
    </div>
  );
}

export default App;
