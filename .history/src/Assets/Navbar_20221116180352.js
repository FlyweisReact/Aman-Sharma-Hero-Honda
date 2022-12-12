import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
};

export default NavBar;
