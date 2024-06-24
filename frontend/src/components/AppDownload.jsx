import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className=" mt-[100px] flex items-center flex-col justify-center text-center"
      id="app-download"
    >
      <p className=" text-3xl">
        For Better Experience Download <br /> Tableready App
      </p>
      <div className="flex gap-4 justify-center mt-5 transition-all">
        <img
          className=" w-[120px] max-w-[180px] cursor-pointer hover:scale-105 duration-300 "
          src={assets.app_store}
          alt=""
        />
        <img
          className=" w-[120px] max-w-[180px] cursor-pointer hover:scale-105 duration-300 "
          src={assets.play_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
