/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from 'react-router-dom'
import Image2 from "../";

const NavBar = () => {
    const navigate = useNavigate()
  const [slide, setSlide] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <form
            className="LoginForm"
            style={{ marginTop: "10%", marginBottom: "10%" }}
          >
            <input type={"text"} placeholder="Customer Name" />
            <br />
            <br />
            <input type={"email"} placeholder="Customer Email" />
            <br />
            <br />
            <input type={"text"} placeholder="Customer Id" />
            <br />
            <br />
            <button className="sendBtn" onClick={() => setModalShow(false)}>
              {" "}
              SEND
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

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
              <img
                src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png"
                alt="nav"
              />{" "}
              <h4>Issue Promocode</h4>
            </div>
            <div className="sideDiv" onClick={() => navigate('/search')}>
              <img
                src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png"
                alt="nav"
              />{" "}
              <h4> Coupon Issue</h4>
            </div>
            <div className="sideDiv">
              <img
                src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png"
                alt="nav"
              />{" "}
              <h4>Search for Coupon</h4>
            </div>
            <div className="sideDiv">
              <img
                src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png"
                alt="nav"
              />{" "}
              <h4>Redeem Coupon</h4>
            </div>
            <div className="sideDiv">
              <img
                src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png"
                alt="nav"
              />{" "}
              <h4>Logout</h4>
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
