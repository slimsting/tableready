import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isActive, setIsActive] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <div
      className={` ${
        isActive ? "   bg-white bg-opacity-50 backdrop-blur-sm  drop-shadow-md h-[80px]" : "h-[80px] bg-white"
      } fixed flex justify-between  items-center gap-2 py-4 md:px-8 xl:px-12 z-20 w-full px-2 `}
    >
      {/* logo */}
      <div className=" w-[120px] xl:w-[140px]">
        <Link to={"/"}>
          <h1
            className={`${
              isActive ? "text-slate-900" : " text-green-700 "
            } font-extrabold text-xl sm:text-2xl`}
          >
            TableReady_Ke.
          </h1>
        </Link>
      </div>
      {/* navbar menu */}
      <ul
        className={` ${
          isActive ? "text-neutral-900" : "text-green-700 "
        } hidden gap-1 md:gap-[10px] text-[18px]  md:flex `}
      >
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${
            menu === "home"
              ? " border border-x-0 border-t-0 font-bold border-b-purple-900"
              : ""
          } cursor-pointer`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${
            menu === "menu"
              ? "border border-x-0 border-t-0 font-bold border-b-green-900"
              : ""
          } cursor-pointer`}
        >
          Menu
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contactUs")}
          className={`${
            menu === "contactUs"
              ? "border border-x-0 border-t-0 font-bold border-b-green-900"
              : ""
          } cursor-pointer`}
        >
          Contact us
        </a>
      </ul>
      {/* navbar right */}
      <div className=" flex items-center gap-3">
        {/* shopping basket */}
        <div className=" relative">
          <Link to={"/cart"}>
            <LiaShoppingCartSolid
              className={`${
                isActive ? "text-slate-900" : " text-green-700 "
              } text-green-700 text-4xl`}
            />
          </Link>
          <div
            className={` ${
              getTotalCartAmount() === 0
                ? " hidden"
                : "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
            }`}
          ></div>
        </div>

        {/* button */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="text-white bg-green-700 rounded-full py-2 px-4  text-center transition duration-300 hover:bg-green-600"
          >
            Sign in
          </button>
        ) : (
          <div className="relative group ">
            <CgProfile
              className={`${
                isActive ? "text-slate-900" : " text-green-700 "
              } text-green-700 text-4xl`}
            />
            {/* orders and logout dropdown */}
            <ul className=" absolute right-0 z-10 hidden group-hover:flex flex-col gap-[10px] bg-white py-2 px-2 rounded-md border border-black outline-2 w-24">
              <Link to={"/myorders"}>
                <button className="flex items-center gap-1 hover:text-red-500 ">
                  <BsHandbag className="text-neutral-900 text-2xl" />
                  <p>Orders</p>
                </button>
              </Link>
              <hr className="border" />
              <button
                onClick={logout}
                className="flex items-center gap-1 hover:text-red-500"
              >
                <TbLogout className="text-2xl text-neutral-900" />
                <p>Logout</p>
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
