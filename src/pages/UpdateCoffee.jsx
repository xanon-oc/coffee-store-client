import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, taste, category, photo, price } = coffee;
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedCoffee = { name, chef, taste, category, photo, price };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/updateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "You coffee has been updated!", "success");
      });
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-center mt-20 mb-20 w-1/2 mx-auto">
          <div>
            <div className="rounded-lg bg-[#F4F3F0] p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h2 className="text-center mt-4 mb-4 font-normal text-4xl text-gray-600">
                Update existing Coffee
              </h2>
              <p className="mb-4 text-center text-gray-400">
                <small>
                  It is a long established fact that a reader will be
                  distraceted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using Content here.
                </small>
              </p>
              <form onSubmit={handleFormData} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    defaultValue={name}
                    type="text"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Chef Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Chef Name"
                      name="chef"
                      defaultValue={chef}
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Taste
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Taste"
                      type="tel"
                      name="taste"
                      defaultValue={taste}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Category
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Category"
                      type="tel"
                      name="category"
                      defaultValue={category}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      type="tel"
                      name="price"
                      defaultValue={price}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Photo URL
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="PhotoURL"
                    type="tel"
                    name="photo"
                    defaultValue={photo}
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <input
                    type="submit"
                    value="Update Coffee"
                    className="cursor-pointer  w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateCoffee;
