import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const CoffeeViewPage = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, taste, category, photo, price } = coffee;
  console.log(coffee);
  return (
    <div>
      <Header />

      <div className="w-10/12 mx-auto">
        <article className="group h-screen flex justify-center items-center">
          <img
            alt="Lava"
            src={photo}
            className="w-1/2 rounded-xl object-fit shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Chef : {chef}
            </p>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Taste : {taste}
            </p>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Category : {category}
            </p>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Price : {price}
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CoffeeViewPage;
