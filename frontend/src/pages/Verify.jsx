import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });

    console.log(response);
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  console.log(success, orderId);
  return (
    <div className=" min-h-[60vh] grid">
      {/* spinner  */}
      <div className=" h-[100px] w-[100px] self-center border-8 border-[#bdbdbd] border-t-red-500 rounded-full animate-rotate"></div>
    </div>
  );
};

export default Verify;
