import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(category)
  return (
    <div
      className=" flex items-center justify-center flex-col lg:flex-row gap-8 mt-4 p-4 lg:px-12 sm:px-10 "
      id="explore-menu"
    >
      <div className=" flex flex-col items-center justify-center lg:max-w-[40%] ">
        <h1 className=" text-neutral-900 text-xl font-medium ">
          Explore our weekly menu
        </h1>
        <p className="mt-4 text-center sm:max-w-[80%]">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.{" "}
        </p>
      </div>
      <div className=" grid grid-cols-5 gap-2 place-items-center ">
        {menu_list.map((item, index) => {
          return (
            <div
              className="py-4 flex items-center justify-center flex-col hover:scale-110 transition-all duration-300 hover:drop-shadow-sm"
              onClick={() =>
                setCategory((prev) =>
                
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              {/* image */}
              <img
                className={`${
                  category === item.menu_name
                    ? " border-4 border-green-700 animate-pulse"
                    : ""
                } w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-[0.2s]`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              {/* name */}
              <p
                className={`${
                  category === item.menu_name
                    ? " border-4 border-x-0 border-t-0 border-b-green-700"
                    : ""
                } mt-2 color-neutral-900 cursor-pointer text-xs sm:text-[1.4vw]`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
