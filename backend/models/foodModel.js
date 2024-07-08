import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, erquired: true },
  price: { type: Number, required: true },
  image: { type: String, erquired: true },
  category: { type: String, erquired: true },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
