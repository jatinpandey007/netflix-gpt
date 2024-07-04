import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidateData} from "../utils/validate"

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidateData(email.current.value, password.current.value);

    setErrorMessage(message);
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Backgroundimg"
        />
      </div>
      <form 
      onSubmit = {(e) => e.preventDefault()} 
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errorMessage ? <p className= "text-red-500 font-bold text-lg py-2">{errorMessage}</p> : null}

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="text-gray-500">{isSignInForm ? "New to Netflix?" : "Already Registered?"}</span>
            <span className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? " Sign up Now." : " Sign in Now."}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;