import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className=" flex flex-col gap-[20px]" id="explore-menu">
      <h1 className=" text-purple-900 text-3xl font-medium ">
        Explore our menu
      </h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.{" "}
      </p>
      <div className=" flex items-center justify-center gap-3 sm:gap-[30px] text-center my-[20px] overflow-x-scroll hide-scrollbar ">
        {menu_list.map((item, index) => {

          return (
            <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index}>
              <img
                className={`${ category === item.menu_name ?" border-4 border-red-500": ""} w-[7.5vw] min-w-[80px]  cursor-pointer rounded-full transition duration-[0.2s]`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className={`${ category === item.menu_name ?" border-4 border-x-0 border-t-0 border-b-red-500": ""} mt-[10px] color-purple-900 cursor-pointer text-sm sm:text-[1.4vw]`}>
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] bg-slate-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
