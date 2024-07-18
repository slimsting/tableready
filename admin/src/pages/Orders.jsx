import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/assets.js";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="p-4 pb-24">
      <h3 className=" font-semibold mb-2">Order page</h3>
      <div className="flex flex-col gap-2 ">
        {orders.map((order, index) => {
          return (
            // order item
            <div
              className=" text-sm grid grid-cols-orders_sm sm:grid-cols-orders items-start gap-2  sm:p-4 px-4 py-8 text-[#505050] bg-white border border-green-500 rounded-md"
              key={index}
            >
              {/* image */}
              <img src={assets.parcel_icon} alt="" />

              <div>
                {/* items */}
                <p className=" font-semibold">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + "x" + item.quantity;
                    } else {
                      return item.name + "x" + item.quantity + ",";
                    }
                  })}
                </p>
                {/* name */}
                <p className="mt-4  font-semibold mb-2">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                {/* address */}
                <div className="mb-2 ">
                  <p className="">{order.address.street + ","}</p>
                  <p className="">
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                {/* phone */}
                <p className=""> {order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>$ {order.amount}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className={`${
                  status === "Food processing" ? " bg-purple-500" : ""
                } bg-green-700 py-1 px-2 rounded-md text-white`}
              >
                <option value="Food processing">Food processing</option>
                <option value="Out for deliverly">Out for deliverly</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
