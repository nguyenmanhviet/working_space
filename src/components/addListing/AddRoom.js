import classes from "./AddRoom.module.css";
import { useState, useEffect, useContext } from "react";
import {
  IoInformationCircleOutline,
  IoCameraOutline,
  IoLocationOutline,
  IoBusinessOutline
} from "react-icons/io5";
import { VscSettingsGear } from "react-icons/vsc";
import { GiMoneyStack } from "react-icons/gi";
import AuthContext from "../../store/authContext";

const AddRoom = (props) => {
  const [services, setService] = useState([]);
  const [properties, setProperty] = useState([]);
  const authCtx = useContext(AuthContext);
  console.log(authCtx.id)
  
  useEffect(() => {
    fetch("http://localhost:8080/api/properties/getByCustomerId/" + authCtx.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProperty(data.data);
      });
  }, [])
  
  console.log(properties);
   
  const submitHandle = (event) => {
    event.preventDefault();
    // console.log("submid ne");
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <IoInformationCircleOutline />
              </span>
              General room information
            </h3>
            <hr></hr>
            {/*  */}
            <div className={classes.control}>
              <label for="name">
                Enter the name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                className={classes.inputName}
                placeholder="Name"
              />
            </div>
            <div className={classes.control}>
              <label for="size">
                How big is it? <span>*</span> (m<sup>2</sup>)
              </label>
              <input type="text" name="size" placeholder="Enter size" />
            </div>
            <div className={classes.control}>
              <label for="capacity">
                How many people can live in the house in total? <span>*</span>
              </label>
              <input type="text" name="capacity" placeholder="Enter capacity" />
            </div>
            <div className={classes.control}>
              <label for="firstname">
                Enter the description <span>*</span>
              </label>
              <textarea
                name="description"
                rows={5}
                cols={100}
                placeholder="Enter the description"
              ></textarea>
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <GiMoneyStack />
              </span>
              Price
            </h3>
            <hr></hr>
            {/*  */}
            <div className={classes.control}>
              <label for="price">
                At what daily price do you want to rent it <span>*</span> (VNĐ)
              </label>
              <input type="text" name="price" placeholder="Enter price" />
            </div>
            <div className={classes.control}>
              <label for="price">Does the price include all utilities ?</label>
              <input
                type="radio"
                name="include"
                className={classes.radio}
                checked
                style={{
                  margin: "0px 15px",
                }}
              />{" "}
              Yes
              <input
                type="radio"
                name="include"
                className={classes.radio}
                style={{
                  margin: "0px 15px",
                }}
              />{" "}
              No
            </div>

            <div className={classes.control}>
              <label for="deposit">
                How much is the deposit <span>*</span> (VNĐ)
              </label>
              <input type="text" name="deposit" placeholder="Enter deposit" />
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <VscSettingsGear />
              </span>
              Service
            </h3>
            <hr></hr>
            <div className={classes.control}>
              <label for="service">
                What services does the room offer? <span>*</span>
              </label>
              {services.map((service) => (
                <div>
                  <input
                    type="checkbox"
                    style={{
                      margin: "15px 15px",
                      // padding: "8px",
                    }}
                    value={service.serviceId}
                  />{" "}
                  {service.serviceName}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <IoBusinessOutline />
              </span>
              Belong to property
            </h3>
            <hr></hr>
            <div className={classes.control}>
              <label for="property">
                Choose the property of this room <span>*</span>
              </label>
              <select name="property" id="property">
                {properties.map((property) => (
                  <option value={property.propertyId}>{property.propertyName}</option>
                ))}
                
              </select>
            </div>
          </div>
        </div>





        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <IoCameraOutline />
              </span>
              Images *
            </h3>
            <hr></hr>
            {/*  */}

            <div className={classes.control}>
              <label for="size">
                Enter at least one photo <span>*</span>
              </label>
              <input type="file" name="image" className={classes.image} />
            </div>
            <div className={classes.control}>
              <p>
                The inclusion of quality images increases the chances of
                renting.
              </p>
            </div>
          </div>
        </div>

        
        <div className={classes.btnContainer}>
          <button type="submit" className={classes.btnRent}>
            Create Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
