import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="flex justify-between items-center gap-2 py-[20px] z-20 w-full bg-white">
      {/* logo */}
      <div className=" w-[120px] xl:w-[140px]">
        <Link to={"/"}>
          <img src={assets.logo} className=" w-[160px]" alt="logo" />
        </Link>
      </div>
      {/* navbar menu */}
      <ul className="hidden gap-1 md:gap-[10px] text-purple-900 text-[18px] md:flex ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${
            menu === "home"
              ? " border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobileApp")}
          className={`${
            menu === "mobileApp"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contactUs")}
          className={`${
            menu === "contactUs"
              ? "border border-x-0 border-t-0 border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          Contact us
        </a>
      </ul>
      {/* navbar right */}
      <div className=" flex items-center gap-5 sm:gap-[20px] md:gap-[30px] lg:gap-[40px]">
        {/* search */}
        <img src={assets.search_icon} alt="" />
        {/* shopping basket */}
        <div className=" relative">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={` ${
              getTotalCartAmount() === 0
                ? " hidden"
                : "absolute h-4 w-4 bg-red-500 -top-2 -right-4 rounded-full flex items-center justify-center text-white p-2"
            }`}
          >
            
          </div>
        </div>
        {/* button */}
        <button
          onClick={() => setShowLogin(true)}
          className=" bg-transparent text-[16px] text-purple-900 rounded-full border border-red-500 px-4 py-2 sm:px-[30px] sm:py-[10px] transition duration-300 hover:bg-slate-200"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
