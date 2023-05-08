import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addCoffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div className="mt-4">
      <h2 className="text-center">Our Popular Products</h2>
      <div className="flex justify-center mt-4">
        <Link
          to="/addCoffeePage"
          className="flex gap-2 border-[2px] hover:border-yellow-700 p-2 rounded-md text-white bg-[#E3B577]"
        >
          Add Coffee
          <img
            src="https://i.ibb.co/bNm0ZK3/1.png"
            className="h-6 w-6"
            alt="tea-cup"
          />
        </Link>
      </div>
      {/* cards */}
      <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
