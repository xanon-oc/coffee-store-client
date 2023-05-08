import React from "react";
import PopularProducts from "./components/PopularProducts";
import Header from "./Shared/Header";
import Banner from "./components/Banner";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <div className="text-white">
      <Header />
      <div>
        <Banner />
      </div>
      <PopularProducts />
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
