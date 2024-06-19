const Header = () => {
  return (
    <div className=" h-[34vh] mx-auto my-[30px] bg-[url('/header_img.png')] bg-no-repeat  bg-cover relative ">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className=" text-white font-medium text-[4.5vw]">Order your favourite food here</h2>
        <p className=" text-white text-[1vw]">
          CHoose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and curinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time
        </p>
        <button className=" bg-slate-200 font-medium py-[1vw] px-[2.3vw] rounded-full">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
