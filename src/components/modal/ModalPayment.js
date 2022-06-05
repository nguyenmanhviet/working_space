import ReactDOM from "react-dom";
import classes from "./ModalPayment.module.css";

import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/authContext";
import { BsCheckCircle, BsPaypal, BsFillCalendar2CheckFill, BsFillCalendarXFill} from "react-icons/bs";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Example from "./Notification";


const ModalPayment = (props) => {



  const authCtx = useContext(AuthContext);
  // console.log("customer id ne", props.reservation.customerId);
  
  const exitRegister = (event) => {
    // NotificationManager.info('Info message');
    event.preventDefault();
    props.onExitModalPayment();
  };

  const handleSendRequest = () => {
    fetch("http://localhost:8080/api/reservation", {
      method: "POST",
      body: JSON.stringify({
        roomId: props.reservation.roomId,
        customerId: props.reservation.customerId,
        createDate: props.reservation.createDate,
        startDate: props.reservation.startDate,
        endDate: props.reservation.endDate,
        quantity: props.reservation.quantity,
        reservationStatusId: 1,
        total: props.reservation.total,
        deposit: props.reservation.deposit,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Yeu cau thanh cong");
        props.onExitModalPayment();
        
      });

    // props.onExitModalPayment();
  }
  return ReactDOM.createPortal(
     
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a href="#" onClick={exitRegister} className={classes.close} />
        <h3>Rent request information</h3>
      </header>
      <div className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={"Nguyen Manh Viet"}
              disabled={true}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={"thidaihoc29012000@gmail.com"}
              disabled={true}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Your Phone:</label>
            <input
              type="text"
              id="phone"
              value={"0772978470"}
              disabled={true}
            />
          </div>
          <div className={classes.rentInfo}>
              <p><span><BsCheckCircle /></span> Daily rent booked: <span>{props.reservation.quantity}</span></p> 
          </div>
          <div className={classes.rentInfo}>
              <p><span><BsPaypal /></span> Amount: <span>{props.reservation.total} VNĐ</span></p> 
          </div>
          <div className={classes.rentInfo}>
              <p><span><BsFillCalendar2CheckFill /></span> Check-in: <span>{props.reservation.startDate}</span> </p> 
          </div>
          <div className={classes.rentInfo}>
              <p><span><BsFillCalendarXFill /></span> Check-out:  <span>{props.reservation.endDate}</span></p> 
          </div>
          <p>Checking carefully the information about rent request to make sure you don't send them wrong.</p>
          <div className={classes.btnContainer}>
            <button className={classes.btnRent} onClick={handleSendRequest}>
              Request
            </button>
          </div>
        
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalPayment;
