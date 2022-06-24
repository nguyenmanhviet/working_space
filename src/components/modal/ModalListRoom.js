import classes from "./ModalListRoom.module.css";

import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import RoomDiv from "./RoomDiv";

const ModalListRoom = (props) => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    fetch(
      `http://128.199.166.110:8080/api/properties/${props.property.propertyId}/rooms`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then((data) => setRooms(data.data))
      .catch((err) => console.log(err));
  }, []);

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a
          href="#"
          className={classes.close}
          onClick={props.onExitModalListRoom}
        />
        <h3>{props.property?.propertyName}</h3>
      </header>
      {rooms.map((room) => (
        <RoomDiv room={room} onActiveModalUpdateRoom={props.onActiveModalUpdateRoom}/>
      ))}
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalListRoom;
