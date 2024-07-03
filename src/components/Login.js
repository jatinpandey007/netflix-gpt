import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setisSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            alt ="Backgroundimg"
            />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign in now"}
            </p>
        </form>
    </div>

  )
}

export default Login