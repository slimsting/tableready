import { useEffect, useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="p-4">
      <h2 className=" font-semibold">My Orders</h2>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className=" grid grid-cols-custom2 md:grid-cols-custom gap-2 items-center text-base py-[10px] px-[20px] text-[#454545] border border-"
            >
              <img className="w-[50px]" src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.legth - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ",";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length} </p>
              <p>
                <span className="text-red-500">&#x25cf;</span>{" "}
                <b className="font-semibold text-[#454545]">{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className=" text-sm sm:text-base py-[12px] rounded-md bg-green-100 "
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
