/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Image2 from "../Component/Group 537.png";
import Coupon from "../Images/Group 537.png";
import SearchModal from "../Modals/SearchModal";
import promocodeModal from "../Modals/Promocode";

const NavBar = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = useState(false);

  //Issue Promocode
  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Body className="MyModal">
  //         <img src={Coupon} alt="Coupon" className="CouponImg" />
  //         <form
  //           className="LoginForm"
  //           style={{ marginTop: "2%", marginBottom: "10%" }}
  //         >
  //           <input type={"text"} placeholder="Customer Name" />
  //           <br />
  //           <br />
  //           <input type={"email"} placeholder="Customer Email" />
  //           <br />
  //           <br />
  //           <input type={"text"} placeholder="Customer Id" />
  //           <br />
  //           <br />
  //           <button className="sendBtn" onClick={() => setModalShow(false)}>
  //             {" "}
  //             SEND
  //           </button>
  //         </form>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // }

  return (
    <>
      <SearchModal show={open} onHide={() => setOpen(false)} />

      <promocodeModal show={modalShow} onHide={() => setModalShow(false)} />

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
              <img src={Image2} alt="nav" />
              <h4> Coupon Issue</h4>
            </div>
            <div
              className="sideDiv"
              onClick={() => {
                setOpen(true);
                setSlide(false);
              }}
            >
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
