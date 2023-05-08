import Header from "./Shared/Header";
import Banner from "./components/Banner";
import Footer from "./Shared/Footer";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="text-white">
      <Header />
      <div>
        <Banner />
      </div>
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
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
