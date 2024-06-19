import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center py-[20px]">
      {/* logo */}
      <div>
        <img src={assets.logo} className=" w-[160px]" alt="logo" />
      </div>
      {/* navbar menu */}
      <ul className="flex gap-[20px] text-purple-900 text-[18px]">
        <li
          onClick={() => setMenu("home")}
          className={`${
            menu === "home"
              ? " border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobileApp")}
          className={`${
            menu === "mobileApp"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contactUs")}
          className={`${
            menu === "contactUs"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          Contact us
        </li>
      </ul>
      {/* navbar right */}
      <div className=" flex items-center gap-[40px]">
        {/* search */}
        <img src={assets.search_icon} alt="" />
        {/* shopping basket */}
        <div className=" relative">
          <img src={assets.basket_icon} alt="" />
          <div className=" absolute h-5 w-5 bg-red-500 -top-2 -right-4 rounded-full flex items-center justify-center text-white p-2">
            0
          </div>
        </div>
        {/* button */}
        <button className=" bg-transparent text-[16px] text-purple-900 rounded-full border border-red-500 px-[30px] py-[10px] transition duration-300 hover:bg-slate-200">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
