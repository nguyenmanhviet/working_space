import classes from "./Service.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = (props) => {
    const [icon, setIcon] = useState({});
    useEffect(() => {
        let headers = new Headers();
    
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
    
        headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.append("Access-Control-Allow-Credentials", "true");
        
        fetch("http://128.199.166.110:8080/api/service/" + props.serviceId, {
          method: "GET",
          headers: headers,
        })
          .then((res) => res.json())
          .then((data) => {
            setIcon(data.data);
          })
          .catch((err) => console.log(err));
      }, []);

  return (
    <div className={classes.utility}>
      <p>
        <span>
          <FontAwesomeIcon icon={`${icon.icon}`} />
        </span>{" "}
        {icon.serviceName}{" "}
      </p>
    </div>
  );
};

export default Service;
