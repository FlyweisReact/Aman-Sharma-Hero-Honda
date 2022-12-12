/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

const NavBar = () => {
  const [slide, setSlide] = useState(false);
  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={() => setSlide(!slide)}></i>
        </div>
      </div>

      {slide ? (
        <div className="upBar" id="upBar" style={{ top: "100px" }}>
        <i class="fa-solid fa-xmark" onClick={() => setSlide(false)}></i>
        <div className="sidebar">
        <div >
          <img  src="" className="thumbnail img-fluid"/>    <h4>Issue Promocode</h4>
        </div>
        </div>
        </div>
      ) : (
        <div className="upBar" id="upBar" style={{ top: "-800px" }}>
         
        </div>
      )}
    </>
  );
};

export default NavBar;
