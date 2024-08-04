const Header = () => {
  return (
    <div className="  h-screen bg-headerParallax bg-fixed bg-center bg-cover bg-no-repeat ">
      <div className=" flex justify-center flex-col items-center animate-fadeIn">
        <h2 className=" mb-4 sm:pt-24  text-center text-2xl pt-32 sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl text-neutral-900 font-semibold max-w-[90vw] lg:max-w-[80vw] xl:max-w-[55vw] ">
          Order your favourite homemade lunch here
        </h2>
        <p className=" text-center hidden text-slate-900 text-[1vw] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[70%] sm:block sm:text-[12px] md:text-base lg:text-lg ">
          Enjoy fresh delicious meals delivered to your doorstep
        </p>
        <button className=" px-4 mt-4 py-2 mb-4 text-sm text-white  bg-green-700 hover:bg-green-600 font-medium md:py-[1vw] md:px-[2.3vw] rounded-full border border-white">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
