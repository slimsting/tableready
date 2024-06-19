import { useState } from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ item }) => {
  const { _id, name, price, description, image } = item;

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className=" w-full m-auto rounded-md shadow-xl animate-fadeIn transition-all">
      {/* food item image */}
      <div>
        <img
          className="w-full rounded-t-2xl "
          src={image}
          alt={`${name} image`}
        />

        {!itemCount ? (
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className=""></div>
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
