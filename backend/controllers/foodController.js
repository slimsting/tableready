import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (request, response) => {
  let image_filename = `${request.file.filename}`;

  const food = new foodModel({
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    category: request.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    response.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    response.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body._id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "food removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `Error:${error}` });
  }
};

export { addFood, listFood, removeFood };
