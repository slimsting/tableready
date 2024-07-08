import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    console.log(response);
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={placeOrder}
      className=" flex flex-col sm:flex-row items-start justify-between gap-4 p-4 "
    >
      {/* place order left */}
      <div className=" w-full max-w-[500px] ">
        <p className=" text-2xl font-medium mb-[30px]">Deliverly infromation</p>
        {/* mult fields */}
        <div className=" flex gap-4">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="first name"
            required
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="last name"
            required
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
          type="emai;"
          placeholder="email adress"
          required
        />
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
          type="text"
          placeholder="street"
          required
        />
        <div className=" flex gap-4">
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="city"
            required
          />
          <input
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="state"
            required
          />
        </div>
        <div className=" flex gap-4">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="zip code"
            required
          />
          <input
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
            type="text"
            placeholder="country"
            required
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          className=" mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-md outline-red-500"
          type="text"
          placeholder="phone"
          required
        />
      </div>

      {/* place order right */}
      <div className=" w-full  sm:max-w-[40%]">
        <div className=" flex-1 flex flex-col gap-2">
          <div>
            <h2>Cart Totals</h2>
            {/* cart total details */}
            <div className=" justify-between flex text-[#555]">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr className=" my-[10px]" />
            <div className=" justify-between flex text-[#555]">
              <p>Deliverly Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className=" my-[10px]" />
            <div className=" justify-between flex text-[#555]">
              <p>Total</p>
              <p>
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => navigate("/order")}
            className=" text-white bg-red-500 py-[12px] rounded-lg  mt-4"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
