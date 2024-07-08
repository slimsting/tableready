import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className=" flex flex-col gap-2 py-12 p-4  text-white bg-slate-700 mt-[100px] w-full"
      id="footer"
    >
      <div className=" flex flex-col gap-8 sm:grid sm:grid-cols-4">
        {/* footer left */}
        <div className="flex flex-col items-start gap-[20px] col-span-2 p-2">
          <h1 className=" text-green-700 font-bold text-2xl italics">
            TableReady.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            temporibus quia neque qui quos explicabo architecto mollitia
            deserunt nesciunt quo repellat et totam alias minus, corporis,
            adipisci asperiores eaque inventore!
          </p>
          {/* social media icons */}
          <div className="flex gap-4">
            <img
              className=" w-[40px] mr-[15px cursor-pointer ]"
              src={assets.facebook_icon}
              alt="facebook icon"
            />
            <img
              className=" w-[40px] mr-[15px cursor-pointer ]"
              src={assets.twitter_icon}
              alt="twitter icon"
            />
            <img
              className=" w-[40px] mr-[15px cursor-pointer ]"
              src={assets.linkedin_icon}
              alt="linked in icon"
            />
          </div>
        </div>
        {/* footer center */}
        <div className="flex flex-col items-start gap-[20px] p-2">
          <h2>COMPANY</h2>
          <ul>
            <li className=" cursor-pointer mb-[10px]">Home</li>
            <li className=" cursor-pointer mb-[10px]">About us</li>
            <li className=" cursor-pointer mb-[10px]">Deliverly</li>
            <li className=" cursor-pointer mb-[10px]">Privacy policy</li>
          </ul>
        </div>
        {/* footer right */}
        <div className="flex flex-col items-start gap-[20px] p-2">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254729741167</li>
            <li>contact@tableready.com</li>
          </ul>
        </div>
      </div>
      <hr className=" w-full h-[2px] bg-gray-500 border-none " />
      <p className="text-center mt-3">
        Copyright 2024 © tableready.com - all right reserved
      </p>
    </div>
  );
};

export default Footer;
