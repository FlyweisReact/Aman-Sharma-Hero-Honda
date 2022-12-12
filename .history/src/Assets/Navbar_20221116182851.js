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
        <div className="sideDiv" >
          <img  src="https://media.istockphoto.com/id/1208768030/vector/coupon-frame-clip-to-save-frame-with-a-dotted-bounding.jpg?s=612x612&w=0&k=20&c=avlbnoR3muVcmRJ3Plg7yexP-1FC1ZbTHS_mDakHGT0=" />    <h4>Issue Promocode</h4>
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
