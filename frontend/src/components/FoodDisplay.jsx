import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" flex flex-col items-center justify-center mt-4 p-4"> 
      <h2 className=" font-semibold mb-8  text-neutral-900 text-xl">Top dishes near you</h2>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
