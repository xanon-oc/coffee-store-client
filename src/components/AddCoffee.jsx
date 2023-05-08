const AddCoffee = () => {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const addedCoffees = { name, chef, taste, category, photo, price };
    console.log(addedCoffees);
    fetch("http://localhost:5000/addCoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedCoffees),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center mt-20 w-1/2 mx-auto">
      <div>
        <div className="rounded-lg bg-[#F4F3F0] p-8 shadow-lg lg:col-span-3 lg:p-12">
          <h2 className="text-center mt-4 mb-4 font-normal text-4xl text-gray-600">
            Add New Coffee
          </h2>
          <p className="mb-4 text-center text-gray-400">
            <small>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
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
              />
            </div>
            <div className="mt-4 flex justify-center">
              <input
                type="submit"
                value="Upload Coffee"
                className="cursor-pointer  w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
