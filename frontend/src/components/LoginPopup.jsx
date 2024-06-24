import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  console.log(currentState);
  return (
    <div className=" absolute z-10 w-full h-full bg-[#00000090] grid max-h-full">
      <form className=" self-center mx-auto w-[70vw] sm:w-[60vw] md:w-[35vw] lg:w-[25vw] xl:w-[23vw] text-[#808080] bg-white flex flex-col py-[25px] px-[30px] gap-[25px] rounded-2xl text-[14px] animate-fadeIn duration-75">
        {/* form status bar */}
        <div className="flex items-center justify-between">
          <h2 className=" font-bold text-black text-xl">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        {/* form inputs */}
        <div className=" flex flex-col gap-3">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input className="border rounded-sm py-2 px-2" type="text" placeholder="Your name" required />
          )}

          <input className="border rounded-sm py-2 px-2" type="email" placeholder="Your email" required />
          <input className="border rounded-sm py-2 px-2" type="password" placeholder="Password" required />
        </div>
        {/* button */}
        <button className=" bg-red-600 text-white  rounded-sm py-2">
          {currentState === "Sign up" ? "Create Account" : "Sign in"}
        </button>
        {/* checkbox */}
        <div className="flex gap-2 items-start">
          <input className=" mt-2" type="checkbox" required />
          <p>by continuing i agree to the terms of use & privacy policy.</p>
        </div>
        {/* login status */}
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className=" cursor-pointer text-red-500 hover:text-blue-500"
              onClick={() => setCurrentState("Sign up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span
              className=" cursor-pointer text-red-500 hover:text-blue-500"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
