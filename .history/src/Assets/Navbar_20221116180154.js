/** @format */

import React, { useState } from "react";
import { Button, Modal, Offcanvas } from "react-bootstrap";
import logo from "../Images/rrh-logo 3.png";
import { useNavigate } from "react-router-dom";

//Login Modal

const NavBar = () => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [secondShow, setSecondShow] = useState(false);
  const close = () => setSecondShow(false);
  const open = () => setSecondShow(true);

  const [eye, setEye] = useState(false);

  //Modal
 

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
    </>
  );
};

export default NavBar;
