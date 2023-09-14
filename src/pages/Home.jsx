import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import StatisticsCard from "../Components/StatisticsCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <Categories />

      <div className="flex flex-col text-center w-full mb-5">
        <h2 className="text-4xl text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular
        </h1>
      </div>

      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className=" h-[55vh] flex justify-center items-center text-4xl ">
          Loading ..
        </div>
      )}

      <StatisticsCard />
    </div>
  );
};

export default Home;
