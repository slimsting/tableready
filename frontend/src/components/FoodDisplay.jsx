import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" mt-[30px]">
      <h2 className=" font-medium text-2xl">Top dishes near you</h2>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {food_list.map((item, index) => {
            if (category === "All" || category === item.category){
                return <FoodItem key={index} item={item} />;
            }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
