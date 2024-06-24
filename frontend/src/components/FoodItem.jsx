import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ item }) => {
  const { _id, name, price, description, image } = item;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className=" w-full m-auto rounded-md shadow-xl animate-fadeIn transition-all">
      {/* food item image */}
      <div className=" relative">
        <img
          className="w-full rounded-t-2xl "
          src={image}
          alt={`${name} image`}
        />

        {!cartItems[_id] ? (
          <img
            onClick={() => addToCart(_id)}
            className=" absolute w-[35px] right-[15px] bottom-[15px] cursor-pointer rounded-full"
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className=" absolute flex items-center justify-center gap-2 bottom-[15px] right-[15px] rounded-full bg-white p-2">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt="remove icon"
            />
            <p>{cartItems[_id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt="add icon"
            />
          </div>
        )}
      </div>
      {/* food item information */}
      <div className="p-4">
        {/* name and rating */}
        <div className="flex items-center justify-between mb-[10px]">
          <p className="font-medium text-[20px]">{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        {/* food item description */}
        <p className=" text-slate-500 text-sm">{description}</p>
        {/* food item price */}
        <p className=" text-red-500 font-medium my-2 ">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
