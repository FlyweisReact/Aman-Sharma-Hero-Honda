/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

const show = () => {
  document.getElementById("upBar").style.marginTop = "200px";
};

const NavBar = () => {
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