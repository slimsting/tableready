import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className=" bg-green-200 w-full min-h-screen p-4 text-[#6d6d6d] text-base">
      <form className=" gap-4 flex flex-col" onSubmit={onSubmitHandler}>
        {/* add image */}
        <div className="">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className=" w-[120px]"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        {/* add product name */}
        <div className="max-w-[90%] sm:max-w-[40%]">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className=" p-1 w-full border"
            type="text"
            name="name"
            placeholder="Type here..."
          />
        </div>
        {/* add product desription */}
        <div className=" max-w-[90%] sm:max-w-[40%] ">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className=" p-1 w-full border"
            name="description"
            rows={6}
            placeholder="Write content here..."
          ></textarea>
        </div>
        {/* add category price */}
        <div className=" flex gap-2">
          <div>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              className=" max-w-[120px] p-1 border"
              name="category"
            >
              <option value=""></option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className=" max-w-[100px] sm:max-w-[120px]  p-1 border"
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        {/* ad button */}
        <button
          className=" w-[120px] p-1 text-white bg-black active:bg-slate-500"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
