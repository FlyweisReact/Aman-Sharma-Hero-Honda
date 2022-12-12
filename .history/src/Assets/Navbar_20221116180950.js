import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

setTimeout(() => {
    const target = document.getElementsByClassName('upBar')
    target.style.top = ''
})

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

      <div className="upBar">
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
