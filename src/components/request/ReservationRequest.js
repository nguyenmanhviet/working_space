// import {
//   BsFillArchiveFill,
//   BsDoorOpen,
//   BsJoystick,
//   BsPaypal,
// } from "react-icons/bs";
import { useParams } from "react-router-dom";
import classes from "./ReservationRequest.module.css";
import {
  IoIosArrowRoundBack,
  IoIosPerson,
  IoMdPhonePortrait,
} from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import Map from "../properties/Map";

import {
  BsCheckCircle,
  BsPaypal,
  BsFillCalendar2CheckFill,
  BsFillCalendarXFill,
} from "react-icons/bs";

const ReservationRequest = (props) => {
  const params = useParams();
  const { reservationId } = params;

  const reservation = {
    id: 1,
    image:
      "https://cdn.roomlessrent.com/listing/af/e9/d0/92/afe9d092-b0bd-4afc-9d77-95f4b095f684.jpg",
    createAt: "24 May 2022",
    status: "Pending",
    name: "VIA TORIO LOFT",
    address: "Via Torino, Milan, Città Metropolitana Di Milano",
    total: 12.12,
    checkin: "24 May 2022",
    checkout: "24 May 2022",
    quantityDates: 10,
  };

  const customer = {
    id: 1,
    name: "Thai Tang Luc",
    phone: "0772978470",
    email: "thaidaihoc29012000@gmail.com",
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.goBack}>
          <button>
            <span>
              <IoIosArrowRoundBack />
            </span>
            ALL REQUESTS
          </button>
        </div>
        <div className={classes.status}>{reservation.status}</div>
      </div>
      <div className={classes.content}>
        <div>
          <div className={classes.detail}>
            <label>Rental request information:</label>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <BsCheckCircle />
                </span>{" "}
                Daily rent booked: <span>{reservation.quantityDates}</span>
              </p>
            </div>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <BsPaypal />
                </span>{" "}
                Amount: <span>{reservation.total} VNĐ</span>
              </p>
            </div>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <BsFillCalendar2CheckFill />
                </span>{" "}
                Check-in: <span>{reservation.checkin}</span>{" "}
              </p>
            </div>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <BsFillCalendarXFill />
                </span>{" "}
                Check-out: <span>{reservation.checkout}</span>
              </p>
            </div>
            <label>Customer Information:</label>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <IoIosPerson />
                </span>{" "}
                Name: <span>{customer.name}</span>
              </p>
            </div>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <HiOutlineMail />
                </span>{" "}
                Email: <span>{customer.email}</span>
              </p>
            </div>
            <div className={classes.rentInfo}>
              <p>
                <span>
                  <IoMdPhonePortrait />
                </span>{" "}
                Phone: <span>{customer.phone}</span>
              </p>
            </div>
          </div>
          <div className={classes.btnContainer}>
              <button className={classes.approvedBtn}>Approve</button>
              <button className={classes.cancelBtn}>Cancel</button>
          </div>
        </div>
        <div className={classes.roomAndMap}>
          <div className={classes.room}>
            <p className={classes.header}>The listing</p>
            <div
              style={{
                width: "100%",
                height: "250px",
                backgroundImage: `url(${reservation.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
            ></div>
            <p className={classes.type}>Apartment</p>
            <label className={classes.name}>VIA TORIO LOFT</label>
            <p className={classes.address}>
              Via Torino, Milan, Città Metropolitana Di Milano
            </p>
          </div>
          <div className={classes.map}>
            <label className={classes.name}>Property Address</label>
            <p className={classes.address}>
              Via Torino, Milan, Città Metropolitana Di Milano
            </p>
            <Map
              lat="16.089616712151383"
              lng="108.14348783953365"
              height="300px"
            ></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationRequest;
