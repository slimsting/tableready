import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import MyOrders from "./pages/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div
        className={`${
          showLogin
            ? " overflow-hidden h-screen font-outfitscroll-smooth "
            : " font-outfit  bg-fixed bg-opacity-50 bg-center scroll-smooth"
        }`}
      >
        <Navbar setShowLogin={setShowLogin} />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
