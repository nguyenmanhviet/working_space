import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useRef, useContext } from "react";
import classes from "./ModalSignup.module.css";
import AuthContext from "../../store/authContext";
import Validator from "../validate/Validator";
import "../validate/Validator.css"
import axios from "axios";

const ModalSignup = (props) => {
  const authCtx = useContext(AuthContext); 
  const usernameRef = useRef();
  const customerNameRef = useRef();
  const citizenIdRef = useRef();
  const birthdayRef = useRef();
  const nationRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [password, setPassword] = useState('');
  const [allCountries,setAllCountries] = useState([]);
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all').then(res => setAllCountries(res.data))
  },[])
 const countries = allCountries.sort((a,b)=>(a.name.common > b.name.common) ? 1 : -1)
  const exitRegister = (event) => {
    event.preventDefault();
    props.onExitRegister();
  };

  const signupHandle = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredUsername = usernameRef.current.value;
    const enteredName = customerNameRef.current.value;
    const enteredCitizen = citizenIdRef.current.value;
    const enteredBirthday = birthdayRef.current.value;
    const enteredNation = nationRef.current.value;
    const enteredPhone = phoneRef.current.value;

    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
        email: enteredEmail,
        customerName: enteredName,
        citizenId: enteredCitizen,
        birthday: enteredBirthday,
        nationality: enteredNation,
        phoneNumber: enteredPhone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.onTranferFrom();
      });
  };

  const handleValidName = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isRequired(`#${id}`),
      ]
    })
  }
  const handleValidEmail = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isEmail(`#${id}`),
      ]
    })
  }
  const handleValidPhone = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isPhoneNumber(`#${id}`),
      ]
    })
  }
  const handleValidCitizen = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isPhoneNumber(`#${id}`),
      ]
    })
  }
  const handleValidUsername = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isUsername(`#${id}`),
      ]
    })
  }
  const handleValidPassword = (id) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.isPassword(`#${id}`),
      ]
    })
  }
  const handleValidConfirmPassword = (id, password) => {
    Validator({
      form: '#formRegister',
      rules: [
        Validator.confirmPassword(`#${id}`, password),
      ]
    })
  }

  
  return ReactDOM.createPortal(
    
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a href="#" onClick={exitRegister} className={classes.close} />
        <h1>Enter on Roomless</h1>
        <p>Discover our community and start searching or creating listings!</p>
      </header>
      <form onSubmit={signupHandle} className="form" id="formRegister">
        <div className={classes.modal__login}>
          <div className={classes.control}>
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full name..."
              ref={customerNameRef}
              onFocus={() => {
                handleValidName('name')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <p>
              Your phone number will not be public. It will be used for
              communication between tenant and owner.
            </p>
            <input
              type="text"
              id="phone"
              placeholder="Phone number..."
              ref={phoneRef}
              onFocus={() => {
                handleValidPhone('phone')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="email" className="form-label">Email</label>
            <p>
              Your email address will not be public. It will be used for
              communication between tenant and owner and for internal
              notifications.
            </p>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              ref={emailRef}
              onFocus={() => {
                handleValidEmail('email')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="citizenId" className="form-label">Citizen Identification</label>
            <p>Your Identification will not be public to everyone.</p>
            <input
              type="text"
              id="citizenId"
              placeholder="Identification..."
              ref={citizenIdRef}
              onFocus={() => {
                handleValidCitizen('citizenId')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label for="birthday" className="form-label">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              ref={birthdayRef}
              onFocus={() => {
                handleValidCitizen('citizenId')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="nation">Nation</label>
            <select name="nation" id="nation" ref={nationRef}>
              {countries.length && countries.map(item => <option value={item.name.common}>{item.name.common}</option>)}
            </select>
          </div>

          <div className={classes.control}>
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username..."
              ref={usernameRef}
              onFocus={() => {
                handleValidUsername('username')
                }
              }
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              ref={passwordRef}
              onFocus={() => {
                handleValidPassword('password')
                }
              }
              onChange={e => setPassword(e.target.value)}
            />
            <div className="form-message"></div>
          </div>

          <div className={classes.control}>
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="Confirm Password..."
              onFocus={() => {
                handleValidConfirmPassword('passwordConfirm', password)
                }
              }
            />
            <span class="form-message"></span>
          </div>

          <div className={classes.consentConfirm}>
            <input type="checkbox"></input>
            <p>
              I accept the <span>Terms of Use </span> &{" "}
              <span>Privacy Policy.</span>
            </p>
          </div>

          <div className={classes.actions}>
            <button oclassName="btn" type="submit">
              Accept and Register
            </button>
          </div>

          <div className={classes.container_signup}>
            <h3>Are you registered yet?</h3>
            <button onClick={props.onTranferFrom}>LOGIN</button>
          </div>
        </div>
      </form>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalSignup;
