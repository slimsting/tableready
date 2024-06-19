import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Header from "../components/Header";
import FoodDisplay from "../components/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
