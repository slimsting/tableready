import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;

    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div
      // onClick={() => setShowLogin(false)}
      className=" absolute z-40 w-full h-full bg-[#00000090] grid max-h-full"
    >
      <form
        onSubmit={onLogin}
        onClick={(event) => event.stopPropagation()}
        className=" self-center mx-auto w-[70vw] sm:w-[60vw] md:w-[35vw] lg:w-[25vw] xl:w-[23vw] text-[#808080] bg-white flex flex-col py-[25px] px-[30px] gap-[25px] rounded-2xl text-[14px] animate-fadeIn"
      >
        {/* form status bar */}
        <div className="flex items-center justify-between">
          <h2 className=" font-bold text-green-700 text-xl">{currentState}</h2>
          <button
            className="flex items-center justify-center w-6 hover:bg-black h-6 bg-green-700 rounded-full text-white font-bold"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          >
            X
          </button>
        </div>
        {/* form inputs */}
        <div className=" flex flex-col gap-3">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              className="border-2 border-green-700 rounded-lg text-green-700 py-2 px-2 placeholder-green-400"
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            className="border-2 border-green-700 text-green-700  rounded-lg py-2 px-2 placeholder-green-400"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            className="border-2 border-green-700 text-green-700 rounded-lg py-2 px-2 placeholder-green-400"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        {/* button */}
        <button
          type="submit"
          className=" bg-green-700 text-white hover:bg-black  rounded-lg font-semibold py-2"
        >
          {currentState === "Sign up" ? "Create Account" : "Sign in"}
        </button>

        {/* checkbox */}
        {currentState === "Login" ? (
          <></>
        ) : (
          <div className="flex gap-2 items-start">
            <input
              className=" mt-2 bg-green-700 text-green-700"
              type="checkbox"
              required
            />
            <p className="text-green-500">
              by continuing i agree to the terms of use & privacy policy.
            </p>
          </div>
        )}

        {/* login status */}
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className=" cursor-pointer font-semibold text-red-500 hover:text-blue-500"
              onClick={() => setCurrentState("Sign up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-green-500">
            Already have an account{" "}
            <span
              className=" cursor-pointer font-semibold text-red-500 hover:text-blue-500"
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
