import { useState, useEffect } from "react";

import classes from "./PropertiesPage.module.css";
import { IoIosBasket, IoIosArrowDown } from "react-icons/io";

import ListProperties from "./ListProperties";
import SimpleMap from "./Map";
import Map from "./Map";

import Property from "./Property";

let initCoordinate = {
  lat: 37.8243523,
  lon: -104.8246814,
};


function compareName( a, b ) {
  if ( a.propertyName < b.propertyName ){
    return -1;
  }
  if ( a.propertyName > b.propertyName ){
    return 1;
  }
  return 0;
}


function compareNew( a, b ) {
  if ( a.createDate < b.createDate ){
    return -1;
  }
  if ( a.createDate > b.createDate ){
    return 1;
  }
  return 0;
}

const PropertiesList = (props) => {
  const [coordinate, setCoordinate] = useState(initCoordinate);
  const [properties, setProperties] = useState([]);

  const seeInMap = (lat, lon) => {
    setCoordinate({
      lat: lat,
      lon: lon,
    });
  };

  const sortProperty = (action) => {
      switch(action){
        case "NAME":
           properties.sort(compareName);
           setProperties(properties);
           break;
        case "NEWEST":
           properties.sort(compareNew);
           setProperties(properties);
           break;
        default:
                   
      }
  }

  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true')
    fetch("http://localhost:8080/api/properties", {
      method: "GET",
      headers: headers, 
    })
      .then((res) => res.json())
      .then((data) => setProperties(data.data))
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <div className={classes.container}>
       
      <div className={classes.propertyContainer}>
        <div className={classes.filter}>
          <button
            className={classes.btnOrder}
            onClick={props.onActiveModalSort}
            onSort={sortProperty}
          >
            <IoIosBasket />
            Cheaper first
            <IoIosArrowDown className={classes.icon} />
          </button>
          <button
            className={classes.btnFilter}
            onClick={props.onActiveModalFilter}
          >
            <IoIosBasket />
            Filter
          </button>
        </div>
        <div className={classes.titleList}>
          <h2>Are you looking for an accommodation?</h2>
          <p>
            Search more then <span>{properties.length}</span> rental listings. Request
            information or <span>rent directly online</span>. Every property on
            the site is <span>verified</span> by us.
          </p>
        </div>

        <ListProperties properties={properties} handleSeeInMap={seeInMap} />
      </div>
      <div className={classes.mapContainer}>
        <div className={classes.googleMap} id="googleMap">
          <Map lat={coordinate.lat} lng={coordinate.lon} height="648px"></Map>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
