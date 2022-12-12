/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Image2 from "../Component/Group 537.png";
import Coupon from "../Images/Group 537.png";
imp

const NavBar = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);


//Issue Promocode  




  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="Navbar">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={() => setSlide(!slide)}></i>
        </div>
      </div>

      {slide ? (
        <div className="upBar" id="upBar" style={{ top: "100px" }}>
          <i class="fa-solid fa-xmark" onClick={() => setSlide(false)}></i>
          <div className="sidebar">
            <div
              className="sideDiv"
              onClick={() => {
                setSlide(false);
                setModalShow(true);
              }}
            >
              <img src={Image2} alt="nav" /> <h4>Issue Promocode</h4>
            </div>
            <div
              className="sideDiv"
              onClick={() => {
                setSlide(false);
                navigate("/search");
              }}
            >
              <img src={Image2} alt="nav" /> <h4> Coupon Issue</h4>
            </div>
            <div className="sideDiv">
              <img src={Image2} alt="nav" /> <h4>Search for Coupon</h4>
            </div>
            <div className="sideDiv">
              <img src={Image2} alt="nav" /> <h4>Redeem Coupon</h4>
            </div>
            <div className="sideDiv">
              <img src={Image2} alt="nav" /> <h4>Logout</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="upBar" id="upBar" style={{ top: "-800px" }}></div>
      )}
    </>
  );
};

export default NavBar;
