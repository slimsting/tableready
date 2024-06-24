import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-[100px]">
      {/* cart items */}
      <div>
        {/* cart items title */}
        <div className=" grid grid-cols-7 items-center text-gray-500  md:text-[1.25rem]">
          <p>Items</p>
          <p className=" col-span-2">Title</p>
          <p>Price</p>
          <p>Quantity </p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((foodItem, index) => {
          if (cartItems[foodItem._id] > 0) {
            return (
              <>
                <div
                  className=" grid grid-cols-7 items-center text-black text-[1rem] my-[10px] "
                  key={index}
                >
                  <img
                    className="w-[50px]"
                    src={foodItem.image}
                    alt={`${foodItem.name} image`}
                  />
                  <p className=" col-span-2">{foodItem.name}</p>
                  <p>$ {foodItem.price}</p>
                  <p>{cartItems[foodItem._id]}</p>
                  <p>{foodItem.price * cartItems[foodItem._id]}</p>
                  <p
                    onClick={() => removeFromCart(foodItem._id)}
                    className=" cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className=" h-[1px] bg-[#e2e2e2] border-none" />
              </>
            );
          }
        })}
      </div>
      {/* cart bottom */}
      <div className=" mt-[80px] flex justify-between gap-4 flex-col-reverse md:flex-row ">
        {/* cart total */}
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
              <p>$ {2}</p>
            </div>
            <hr className=" my-[10px]" />
            <div className=" justify-between flex text-[#555]">
              <p>Total</p>
              <p>$ {getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className=" text-white bg-red-500 py-[12px] rounded-lg w-[30vw]"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        {/* cart promo code */}
        <div className="flex flex-1 ">
          <div className="justify-end md:justify-start flex-1">
            <p className=" text-[#555]">
              If you have a promo code enter it here
            </p>
            {/* cart promo code input */}
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-lg">
              <input
                className=" bg-transparent pl-[10px]"
                type="text"
                placeholder="promo code"
              />
              <button className=" w-[15vw] py-[12px] px-[5px] bg-black text-white rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
