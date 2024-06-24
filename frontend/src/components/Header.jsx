const Header = () => {
  return (
    <div className=" h-[20vh] sm:h-[34vh] mx-auto my-[30px] bg-[url('/header_img.png')] bg-no-repeat  bg-cover relative rounded-lg ">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[80%] md:max-w-[80%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className=" text-3xl sm:text-4xl md:text-5xl text-white font-medium ">
          Order your favourite food here
        </h2>
        <p className=" hidden text-white text-[1vw] md:max-w-[70%] lg:max-w-[50%] sm:block sm:text-[12px] ">
          CHoose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and curinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time
        </p>
        <button className=" px-4 py-2 bg-slate-200 font-medium md:py-[1vw] md:px-[2.3vw] rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
