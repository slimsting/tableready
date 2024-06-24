import {useContext} from 'react'
import {StoreContext} from "../Context/StoreContext"
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form>
      {/* place order left */}
      <div>
        <p>Deliverly infromation</p>
        {/* mult fields */}
        <div>
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="emai;" placeholder="email adress" />
        <input type="text" placeholder="street" />
        <div>
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div>
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      {/* place order right */}
      <div>
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
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
