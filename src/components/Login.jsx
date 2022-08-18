import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const handler = (event) => {
    event.preventDefault();

    //     console.log(phone);
    axios
      .post(
        "http://fintech-backend-staging.easyaspataal.com/api/phone_numbers/send_otp",
        { phoneNumber }
      )
      .then((e) => {
        console.log(e);
      });
  };
  return (
    <div className="App">
      <img
        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=300"
        alt=""
      />
      <h3>Please enter your number </h3>
      <p>we need this to send verify your code</p>
      <form onSubmit={handler}>
        <input
          className="input"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          type="number"
          placeholder="enter your number"
          id="phone"
        />
        <Link to="/otp">enter</Link>
      </form>
    </div>
  );
};
