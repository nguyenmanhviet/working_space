import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";

import classes from "./MyAccount.module.css";
import {
  IoIosSettings,
  IoIosSearch,
  IoIosCalendar,
  IoIosCall,
  IoIosHelpCircleOutline,
  IoIosContact,
  IoIosContacts,
} from "react-icons/io";

const MyAccount = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHanlde = () => {
    authCtx.logout();
    history.replace("/");
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.info}>
          <h2>Hello, Nguyen Manh Viet</h2>
          <span>Tenant</span> / <span>Landlord</span>
          <p>
            <b>Email:</b> <span>thidaihoc29012000@gmail.com</span>
          </p>
          <p>
            <b>Phone number:</b> <span>0772978470</span>
          </p>
          <NavLink to="/">
            <IoIosSettings /> Account settings
          </NavLink>
          <div className={classes.avatar}>
            <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"></img>
          </div>
        </div>
        <NavLink to="" className={classes.card}>
          <div>
            <h3>Find out how Roomless works</h3>
            <p>Find out why Roomless is worth it!</p>
            <img
              alt=""
              src="https://roomlessrent.com/assets/imgs/how_works/CARICA.png"
            ></img>
          </div>
        </NavLink>
        <NavLink to="/properties" className={classes.card}>
          <div>
            <h3>Properties for rent</h3>
            <p>Search for a house or room for rent in your city.</p>
            <img
              alt=""
              src="https://roomlessrent.com/assets/imgs/how_works/CERCA.png"
            ></img>
          </div>
        </NavLink>
      </div>
      <div className={classes.right}>
        <div className={classes.cardRight}>
          <p>SEARCH</p>
          <p>
            <NavLink to="/properties">
              <IoIosSearch /> Properties for rent
            </NavLink>
          </p>
        </div>
        <div className={classes.cardRight}>
          <p>MANAGEMENT</p>
          <p>
            <NavLink to="/properties">
              <IoIosCalendar /> Apointments
            </NavLink>
          </p>
          <p>
            <NavLink to="/properties">
              <IoIosCall /> Requests
            </NavLink>
          </p>
        </div>
        <div className={classes.cardRight}>
          <p>SUPPORT</p>
          <p>
            <NavLink to="/properties">
              <IoIosHelpCircleOutline /> How does it work?
            </NavLink>
          </p>
          <p>
            <NavLink to="/properties">
              <IoIosContact /> Contact us
            </NavLink>
          </p>
          <p>
            <NavLink to="/properties">
              <IoIosContacts /> About us
            </NavLink>
          </p>
        </div>
        <div className={classes.button}>
          <button onClick={logoutHanlde}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
