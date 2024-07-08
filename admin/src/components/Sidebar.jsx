import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className=" border border-t-0 border-r-0 border-green-100 min-w-16 sm:min-w-56 md:min-w-64 lg:min-w-80 bg-yellow-100 drop-shadow-sm">
      {/* sidebar options */}
      <div className=" pt-[50px] pl-[20%] flex flex-col gap-4">
        {/*  add item */}
        <NavLink
          to={"/add"}
          onClick={() => setIsActive("add")}
          className={` ${
            isActive === "add" ? " bg-green-200 border-r-0" : ""
          } flex items-center gap-2 border-2 border-green-100 border-r-0 p-2 cursor-pointer rounded-l-md`}
        >
          <img src={assets.add_icon} alt="" />
          <p className=" hidden sm:block">Add Items</p>
        </NavLink>
        {/* list item */}
        <NavLink
          to={"/list"}
          onClick={() => setIsActive("list")}
          className={` ${
            isActive === "list" ? " bg-green-200 border-r-0" : ""
          } flex items-center gap-2 border-2 border-green-100 border-r-0 p-2 cursor-pointer rounded-l-md`}
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden sm:block">List Items</p>
        </NavLink>
        {/* orders*/}
        <NavLink
          to={"/orders"}
          onClick={() => setIsActive("orders")}
          className={` ${
            isActive === "orders" ? " bg-green-200 border-r-0" : ""
          } flex items-center gap-2 border-2 border-green-100 border-r-0 p-2 cursor-pointer rounded-l-md`}
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden sm:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
