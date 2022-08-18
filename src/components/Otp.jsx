import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Style.css";

export const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();

  const handler = (e) => {
    e.preventDefault();

    //     console.log(phone);
    axios
      .post(
        "http://fintech-backend-staging.easyaspataal.com/api/phone_numbers/verify_otp",
        { phoneNumber, otp }
      )
      .then((e) => {
        alert("sussecc fully");
      });
  };

  return (
    <div className="verify">
      <img
        src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
        alt=""
        srcset=""
      />
      <h4>Enter right OTP</h4>
      <form onSubmit={handler}>
        <div>
          <input
            className="input"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="number"
            placeholder="enter your number"
            id="number "
          />
          <input
            className="input1"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            type="number"
            placeholder="enter your otp"
            id="otp"
          />
        </div>
        <button className="inputs">enter</button>
      </form>
    </div>
  );
};
