import React from "react";
// import { useEffect, useState } from "react";
// import { fetchData, options } from "./utils/fetchData";
import { Home } from "./pages/Home";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ExerciseDetails } from "./pages/ExerciseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        {/* <Route path="exercise/:id" element={<ExerciseDetails />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
