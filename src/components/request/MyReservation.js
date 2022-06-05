import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/authContext";

import { NavLink } from "react-router-dom";


import {

  BsFillArchiveFill,

} from "react-icons/bs";
import classes from "./MyReservation.module.css";

import ReservationCard from "./ReservationCard";

const MyReservation = (props) => {
  const authCtx = useContext(AuthContext);
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    fetch(
      "http://localhost:8080/api/reservation/reservation_by_customer/" +
        authCtx.id +
        "?reservationStatusId=1",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReservation(data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div class={classes.container}>
      <h2 className={classes.headerr}>
        <span>
          <BsFillArchiveFill />
        </span>
        MY RESERVATIONS
      </h2>
      <ul class={classes.responsiveTable}>
        <li class={classes.tableHeader}>
          <div class={classes.col1}>Room</div>
          <div class={classes.col2}>Landlord Information</div>
          <div class={classes.col3}>Check-in</div>
          <div class={classes.col4}>Check-out</div>
          <div class={classes.col5}>Status</div>
        </li>
        {reservations?.map((reservation) => (
          <NavLink
            className={classes.linkReservation}
            to={{
              pathname: `/reservation/` + reservation.reservationId,
            }}
          >
            <ReservationCard reservation={reservation} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default MyReservation;
