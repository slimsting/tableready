import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className=" flex items-start justify-center flex-col md:flex-row md:items-end cursor-pointer">
        <h1 className=" font-bold text-green-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
          TableReady.
        </h1>
        <p className=" text-xs text-green-700 ">Admin panel</p>
      </div>
      <img
        className=" w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] border-2 border-green-700 rounded-full "
        src={assets.profile_image}
        alt="admin profile picture"
      />
    </div>
  );
};

export default Navbar;
