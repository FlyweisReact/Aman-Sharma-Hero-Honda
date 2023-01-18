import React from "react";
import { Container , Modal , Form , Button  } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import "./Search.css";
import BodyImage from "./Group 539.png";
import Image from "./Group 537.png";


function ResendCopuon(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Redeem Coupon
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container style={{ width: "400px" }}>
          <Form>
            <Form.Group className="my-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control type="tel" pattern="[0-9]{4}" />
            </Form.Group>
            <Button>Verify</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}


const Redeem = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
   <>
         <ResendCopuon show={modalShow} onHide={() => setModalShow(false)} />

      <NavBar />
      <img src={BodyImage} alt="--" className="SearchImg" />
      <img src={Image} alt="--" className="Hero"/>
      <Container className="search">
        <form className="searchForm">
          <input type={"text"} placeholder="Coupons Code" />
          <br />
          <br />
          <input type={"text"} placeholder="Registration / Vin Number" />
          <br />
          <br />
          <button className="searchBtn">    REDEEM</button>
        </form>
      </Container>
   </>
  )
}

export default Redeem