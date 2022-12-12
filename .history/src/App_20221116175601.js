/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./Component/Homescreen";
import Nav from "./Component/Nav";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Homescreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
