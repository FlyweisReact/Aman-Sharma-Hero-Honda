/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

const NavBar = () => {
  const [slide, setSlide] = useState(false);
  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} aly='' />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars" onClick={() => setSlide(!slide)}></i>
        </div>
      </div>

      {slide ? (
        <div className="upBar" id="upBar" style={{ top: "100px" }}>
          <i class="fa-solid fa-xmark" onClick={() => setSlide(false)}></i>
          <div className="sidebar">
            <div className="sideDiv">
              <img src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png" />{" "}
              <h4>Issue Promocode</h4>
            </div>
            <div className="sideDiv">
              <img src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png" />{" "}
              <h4>Issue Promocode</h4>
            </div>
            <div className="sideDiv">
              <img src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png" />{" "}
              <h4>Issue Promocode</h4>
            </div>
            <div className="sideDiv">
              <img src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png" />{" "}
              <h4>Issue Promocode</h4>
            </div>
            <div className="sideDiv">
              <img src="https://w7.pngwing.com/pngs/780/46/png-transparent-computer-icons-coupon-voucher-coupon-miscellaneous-text-rectangle-thumbnail.png" />{" "}
              <h4>Issue Promocode</h4>
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
