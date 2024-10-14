import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { isDataValid } from "../../utils/validate";
function LoginForm() {
  // State variables used to Store the state -> LoginForm or SingInForm
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handlerToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // ! On submit checking the whether the email or password is valid or not => To pass the email and password we will use UseRef hook
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSumit = (e) => {
    e.preventDefault();
    // Getting the email and password
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Call the function to validate the form-> defines in util file
    const errorMessage = isDataValid(email, password);
    setErrorMessage(errorMessage);
  };

  return (
    <form
      onSubmit={handleSumit}
      className="absolute flex flex-col items-center justify-center w-screen h-screen"
    >
      <div className="flex flex-col w-3/12 py-20 px-10 gap-y-6 rounded-md  bg-stone-950/80 ">
        <h1 className="text-4xl font-bold text-white w-10/12  mx-auto">
          {isSignInForm ? "Sign In" : "Login Form"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="name"
            placeholder="Name of User"
            className="w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-600/50"
            required
          />
        )}
        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="Email or Phone number"
          className="w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-600/50"
          required
        />
        <input
          type="password"
          ref={passwordRef}
          name="password"
          placeholder="Password"
          className="w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-600/50"
          required
        />

        {/* Displaying the error Message */}
        <div>
          {
            //! errorMessage && <p className='w-10/12 mx-auto  py-2 text-red-500 '>{errorMessage}</p>
            //  the errorMessage either contains error information or null. if it contains null -> it will not be displayed on the screen
            <p className="w-10/12 mx-auto font-bold py-2 text-red-500 ">
              {errorMessage}
            </p>
          }
        </div>
        {/* ! Implementing the onClick on the button */}
        <button
          className="w-10/12  mx-auto py-2 px-4 text-[#F8F6F4] text-xl font-bold bg-red-700"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Login"}
        </button>

        <div className="flex w-10/12 text-sm justify-between mx-auto">
          <div className="flex">
            <input type="checkbox" name="" />
            <p className="text-slate-300 pl-2 ">Remember Me</p>
          </div>
          <NavLink className="text-slate-300"> Need Help?</NavLink>
        </div>
        <div className="w-10/12  mx-auto">
          {isSignInForm && (
            <p className="text-gray-400 text-sm">
              New to Netflix?
              <NavLink
                className="text-white cursor-pointer"
                onClick={handlerToggleForm}
              >
                {" "}
                Login{" "}
              </NavLink>
            </p>
          )}
          {!isSignInForm && (
            <p className="text-gray-400 text-sm">
              Already a User
              <NavLink
                className="text-white cursor-pointer"
                onClick={handlerToggleForm}
              >
                {" "}
                SignIn{" "}
              </NavLink>
            </p>
          )}
          {isSignInForm && (
            <p className="text-gray-400 py-2 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span>
                <NavLink className="text-blue-400 cursor-pointer">
                  Learn more.
                </NavLink>
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
