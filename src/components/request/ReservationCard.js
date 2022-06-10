import classes from "./ReservationCard.module.css";
import { useState, useEffect } from "react";
import {
  IoAlarmSharp,
  IoCheckmarkCircleSharp,
  IoWalletSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";

import { HiOutlineMail } from "react-icons/hi";
import { Carousel } from "react-bootstrap";
import { BsFillCalendar2CheckFill, BsFillCalendarXFill } from "react-icons/bs";
import { IoIosPerson, IoMdPhonePortrait } from "react-icons/io";

const ReservationCard = (props) => {
  const [room, setRoom] = useState({});
  const [landLord, setLandLord] = useState({});

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    fetch("http://localhost:8080/api/rooms/" + props.reservation.roomId, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setRoom(data.data);
      })

      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    fetch("http://localhost:8080/api/rooms/" + props.reservation.roomId, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setRoom(data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <li class={classes.tableRow}>
      <div class={classes.col1} data-label="Job Id">
        <Carousel slide={false} controls={true}>
          {room.images?.map((image) => (
            <Carousel.Item className={classes.item}>
              <img
                className={classes.image}
                src={`${image.url}`}
                alt="First slide"
                style={{
                  width: "100%",
                  height: "80px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div class={classes.col2} data-label="Customer Name">
        <div className={classes.infoCus}>
          <p>
            <span>
              {" "}
              <IoIosPerson />
            </span>{" "}
            Thai Tang Luc
          </p>
        </div>
        <div className={classes.infoCus}>
          <p>
            <span>
              {" "}
              <IoMdPhonePortrait />{" "}
            </span>{" "}
            0772974870
          </p>
        </div>
        <div className={classes.infoCus}>
          <p>
            <span>
              {" "}
              <HiOutlineMail />{" "}
            </span>{" "}
            thidaihoc29012000@gmail.com
          </p>
        </div>
      </div>
      <div class={classes.col3} data-label="Check-in">
        <div className={classes.checkDate}>
          <div>
            <BsFillCalendar2CheckFill />
          </div>
          {props.reservation.startDate}
        </div>
      </div>
      <div class={classes.col4} data-label="Checkout">
        <div className={classes.checkDate}>
          <div>
            <BsFillCalendarXFill />
          </div>
          {props.reservation.endDate}
        </div>
      </div>
      <div class={classes.col5} data-label="Payment Status">
        {props.reservation.reservationStatusId === 1 && (
          <div
            className={classes.status}
            style={{
              border: "1px solid #fece04",
            }}
          >
            <div
              className={classes.icon}
              style={{
                color: "#fece04",
              }}
            >
              <IoAlarmSharp />
            </div>
            <div className={classes.text}>
              <div
                className={classes.notify}
                style={{
                  color: "#fece04",
                }}
              >
                The request must be confirmed.
              </div>
              <div className={classes.note}>
                The request must be confirmed by the owner of the room.
              </div>
            </div>
          </div>
        )}
        {props.reservation.reservationStatusId === 2 && (
          <div
            className={classes.status}
            style={{
              border: "1px solid #44ac44",
            }}
          >
            <div
              className={classes.icon}
              style={{
                color: "#44ac44",
              }}
            >
              <IoCheckmarkCircleSharp />
            </div>
            <div className={classes.text}>
              <div
                className={classes.notify}
                style={{
                  color: "#44ac44",
                }}
              >
                The request is completed.
              </div>
              <div className={classes.note}>
                The owner accepted and you paid the total.
              </div>
            </div>
          </div>
        )}
        {props.reservation.reservationStatusId === 3 && (
          <div
            className={classes.status}
            style={{
              border: "1px solid #fece04",
            }}
          >
            <div
              className={classes.icon}
              style={{
                color: "#fece04",
              }}
            >
              <IoWalletSharp />
            </div>
            <div className={classes.text}>
              <div
                className={classes.notify}
                style={{
                  color: "#fece04",
                }}
              >
                The request is ready for paying.
              </div>
              <div className={classes.note}>
                The request is confirmed by the owner and now you can deposit.
              </div>
            </div>
          </div>
        )}
        {props.reservation.reservationStatusId === 4 && (
          <div
            className={classes.status}
            style={{
              border: "1px solid #d75a64",
            }}
          >
            <div
              className={classes.icon}
              style={{
                color: "#d75a64",
              }}
            >
              <IoCloseCircleSharp />
            </div>
            <div className={classes.text}>
              <div
                className={classes.notify}
                style={{
                  color: "#d75a64",
                }}
              >
                The request has been cancelled.
              </div>
              <div className={classes.note}>
                The request is rejected by the owner or cancelled by you.
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default ReservationCard;
