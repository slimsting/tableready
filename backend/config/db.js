import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://newbongadson:Lostfound@cluster0.sctvahu.mongodb.net/tableready"
    )
    .then(() => console.log("db conneted"));
};
