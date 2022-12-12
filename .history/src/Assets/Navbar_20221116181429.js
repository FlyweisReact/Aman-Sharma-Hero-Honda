/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";



const NavBar = () => {
    const [slide , setSlide] = useState(false)
  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={show}></i>
        </div>
      </div>

      <div className="upBar" id="upBar">
        <div>Issue Promocode</div>
        <div>Issue Promocode</div>
        <div>Issue Promocode</div>
        <div>Issue Promocode</div>
        <div>Issue Promocode</div>
        <div>Issue Promocode</div>
      </div>
    </>
  );
};

export default NavBar;
