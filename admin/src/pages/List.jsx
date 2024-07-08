import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      _id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className=" p-4 sm:p-8 bg-green-200 w-[80%] gap-2">
      <p>All Foods List</p>
      {/* list table */}
      <div className="flex flex-col gap-1 ">
        <div className=" bg-green-700 text-white grid grid-cols-custom-layout items-center gap-2 py-2 px-2 border rounded-t-md text-[13px] w-[100%]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((foodItem, index) => {
          return (
            <div
              className=" grid grid-cols-custom-layout bg-white items-center gap-1 py-2 px-2  text-[13px]"
              key={index}
            >
              <img
                className="w-[50px]"
                src={`${url}/images/` + foodItem.image}
                alt={`${foodItem.name} image`}
              />
              <p>{foodItem.name}</p>
              <p>{foodItem.category}</p>
              <p>{foodItem.price}</p>
              <button
                onClick={() => removeFood(foodItem._id)}
                className=" flex items-center justify-center text-red-500 h-4 w-4 font-bold rounded-full"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
