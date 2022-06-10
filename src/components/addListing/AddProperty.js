import classes from "./AddProperty.module.css";
import { useState, useEffect, useContext } from "react";
import {
  IoInformationCircleOutline,
  IoCameraOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";

const AddProperty = (props) => {
  const [types, setType] = useState([]);

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    
    fetch("http://localhost:8080/api/property_type/property_types", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setType(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
              General property information
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
              <label for="price">
                What kind of house is it ? <span>*</span>
              </label>
              {types.map((type) => (
                <>
                  <input
                    value={type.propertyTypeId}
                    type="radio"
                    name="include"
                    className={classes.radio}
                    style={{
                      margin: "0px 15px",
                    }}
                  />
                  {type.propertyTypeName}
                </>
              ))}
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
              <input type="file" name="image" className={classes.image} multiple={true}/>
            </div>
            <div className={classes.control}>
              <p>
                The inclusion of quality images increases the chances of
                renting.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.personInfo}>
            <h3>
              <span>
                <IoLocationOutline />
              </span>
              Address *
            </h3>
            <hr></hr>
            {/*  */}

            <div className={classes.control}>
              <label for="address">
                Enter full address <span>*</span>
              </label>
              <input
                type="type"
                name="address"
                placeholder="Enter address"
                className={classes.inputName}
              />
            </div>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <button type="submit" className={classes.btnRent}>
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
