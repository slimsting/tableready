import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-12 ">
      {/* cart items */}
      <div>
        {/* cart items title */}
        <div className=" grid grid-cols-cart gap-2 items-center text-gray-500  md:text-[1.25rem]">
          <p>Items</p>
          <p>Title</p>
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
                  className=" grid grid-cols-cart gap-2 items-center text-black text-[1rem] my-[10px] "
                  key={index}
                >
                  <img
                    className="w-[50px]"
                    src={url + "/images/" + foodItem.image}
                    alt={`${foodItem.name} image`}
                  />
                  <p>{foodItem.name}</p>
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
      <div className=" mt-[80px] flex justify-between gap-10 flex-col-reverse md:flex-row ">
        {/* cart total */}
        <div className=" flex-1 flex flex-col gap-2 ">
          <div>
            <h2 className=" font-semibold mb-4">Cart Totals</h2>
            {/* cart total details */}
            {/* subtotal */}
            <div className=" justify-between flex text-[#555]">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr className=" my-[10px]" />
            {/* deliverly fee */}
            <div className=" justify-between flex text-[#555]">
              <p>Deliverly Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className=" my-[10px]" />
            {/* total */}
            <div className=" justify-between flex text-[#555] mb-4">
              <p>Total</p>
              <p>
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/order")}
            className=" text-white bg-red-500 py-[12px] rounded-lg w-full "
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
                className=" bg-transparent pl-[10px] focus:outline-none w-full mr-2"
                type="text"
                placeholder="promo code"
              />
              <button className=" sm:w-[15vw] py-2 px-3 bg-black text-white rounded-r-lg">
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
