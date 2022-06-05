import { useState, useEffect } from "react";
import { IoLocationSharp, IoMap } from "react-icons/io5";
import { MdMeetingRoom, MdOutlineRateReview } from "react-icons/md";
import Map from "../properties/Map";
import ListRoom from "./ListRoom";
import Rating from "@mui/material/Rating";
import classes from "./RoomPage.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListReview from "./ListReview";
import Carousel from "react-elastic-carousel";
import { useParams } from "react-router-dom";
import './RoomPage.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const RoomPage = (props) => {
  // NotificationManager.success('Success message', 'Title here');
  // NotificationManager.info('Info message');

  const [property, setProperty] = useState({});
  const [propertyTypeId, setPropertyTypeId] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [rooms, setRooms] = useState();
  // const []

  const params = useParams();

  const { propertyId } = params;
  console.log(propertyId);

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    fetch("http://localhost:8080/api/properties/" + propertyId, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        
        fetch("http://localhost:8080/api/property_type/property_type/" + data.data.propertyTypeId, {
          method: "GET",
          headers: headers,
        }).then((res) => res.json())
        .then((data) => setPropertyTypeId(data.data.propertyTypeName));
        setProperty(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(property.rating);
   
  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true')
    fetch(`http://localhost:8080/api/properties/${propertyId}/rooms`, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setRooms(data.data))
      .catch((err) => console.log(err));
  }, []);
  //    console.log(rooms);

  // const rooms = [
  //   {
  //     roomId: 1,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/02/58/41/b2/025841b2-39c8-4952-bed9-fc71b1c38e40.jpg",
  //     name: "Phong so 1",
  //     price: 100,
  //     description:
  //       "Phong dep, dien tich thoang, phu hop cho dan lao dong va moi nguoi yeu thich ",
  //     size: 50,
  //     capacity: 5,
  //     status: "available",
  //   },
  //   {
  //     roomId: 2,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/ab/88/82/db/ab8882db-b9e8-40d3-a53a-090c1d17b00c.jpg",

  //     name: "Phong so 2",
  //     price: 100,
  //     description: "Phong dep, dien tich thoang, phu hop cho dan lao dong",
  //     size: 50,
  //     capacity: 5,
  //     status: "available",
  //   },
  //   {
  //     roomId: 3,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/78/a2/8b/eb/78a28beb-0a8a-49d7-a756-9a739eedc34a.jpg",

  //     name: "Phong so 1",
  //     price: 100,
  //     description: "Phong dep, dien tich thoang, phu hop cho dan lao dong",
  //     size: 50,
  //     capacity: 5,
  //     status: "available",
  //   },
  //   {
  //     roomId: 4,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/ed/82/60/eb/ed8260eb-0549-48be-b63d-afb4849ace4d.jpg",

  //     name: "Phong so 1",
  //     price: 100,
  //     size: 50,
  //     description: "Phong dep, dien tich thoang, phu hop cho dan lao dong",
  //     capacity: 5,
  //     status: "available",
  //   },
  //   {
  //     roomId: 5,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/5f/17/f8/1d/5f17f81d-d0b9-474b-9373-660e60e5aa04.jpg",

  //     name: "Phong so 1",
  //     price: 100,
  //     size: 50,
  //     capacity: 5,
  //     description: "Phong dep, dien tich thoang, phu hop cho dan lao dong",
  //     status: "available",
  //   },
  //   {
  //     roomId: 6,
  //     image:
  //       "https://cdn.roomlessrent.com/listing/20/bc/bd/ee/20bcbdee-095c-4269-8c01-a8b5e0bcd954.jpg",

  //     name: "Phong so 1",
  //     price: 100,
  //     size: 50,
  //     description: "Phong dep, dien tich thoang, phu hop cho dan lao dong",
  //     capacity: 5,
  //     status: "available",
  //   },
  // ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];

  // const images = [
  //   "https://cdn.roomlessrent.com/listing/b8/f4/8b/13/b8f48b13-3d18-4b70-ba18-0e1a74f50d31.jpg",
  //   "https://cdn.roomlessrent.com/listing/b8/f4/8b/13/b8f48b13-3d18-4b70-ba18-0e1a74f50d31.jpg",
  // ];
  // const images = property.images;

  // console.log(images);

  return (
    <div className={classes.container}>
      <div>
        <NotificationContainer/>
      </div>
      <div className={classes.container_infor}>
        <div className={classes.container_left}>
          <Carousel
            className={classes.carousel}
            breakPoints={breakPoints}
            // pagination={false}
            showArrows={false}
            // enableAutoPlay
          >
            {property.images?.map((image) => (
              <div
                className={classes.image}
                style={{
                  width: "100%",
                  height: "500px",
                  backgroundImage: `url('${image.url}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                }}
              >
                <div className={classes.ratingProperty}>
                  <Rating
                    className={classes.stars}
                    name="half-rating-read"
                    value={+property.rating}
                    precision={0.5}
                    readOnly
                  />
                  <div className={classes.rentTotal}>
                    <p>(20) people rent</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div className={classes.listRoom}>
            <div className={classes.contentRooms}>
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList>
                  <Tab style={{ color: "#1e8489" }}>
                    <MdMeetingRoom /> Rooms
                  </Tab>
                  <Tab style={{ color: "#1e8489" }}>
                    <MdOutlineRateReview /> Reviews
                  </Tab>
                </TabList>

                <TabPanel>
                  {rooms && <ListRoom rooms={rooms} onActiveModalRoom={props.onActiveModalRoom}/>}
                </TabPanel>
                <TabPanel>
                  <ListReview />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className={classes.container_right}>
          <div className={classes.content}>
            <h1 className={classes.titleContent}>Property</h1>
            <hr style={{ borderColor: "#dae0e6" }}></hr>
            <h1>{property.propertyName}</h1>
            <p>
              {" "}
              <IoLocationSharp className={classes.icon} />
              {property.address + ", " + property.city}
            </p>
            <h4>{propertyTypeId}</h4>

            <p>
              Quantity room: <span>{property.roomQuantity}</span>
            </p>
            <p>
              Decription:{" "}
              <span>
                {property.description}
              </span>
            </p>
            {/* <button className={classes.btnMap}>
              <IoMap /> See in map
            </button> */}
          </div>
          <div className={classes.content}>
            <h1 className={classes.titleContent}>Landlord</h1>
            <hr style={{ borderColor: "#dae0e6" }}></hr>
            <div className={classes.avatar_name}>
              <div
                className={classes.avatar}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundImage: `url('https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "50%",
                }}
              ></div>
              <h4>Thai Tang Luc</h4>
            </div>
            <p>
              Phone number: <span>0772978470</span>
            </p>
            <p>
              Email: <span>vietdeptrai@gmail.com</span>
            </p>
          </div>
          <div className={classes.contentMap}>
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

export default RoomPage;
