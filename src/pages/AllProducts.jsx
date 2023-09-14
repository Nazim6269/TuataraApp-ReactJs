import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Products from "../Components/Products";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Categories />

      <div className="flex flex-col text-center w-full mb-5">
        <h2 className="text-4xl text-black tracking-widest font-medium title-font mb-1">
          All Products
        </h2>
      </div>

      <Products products={products} />
    </div>
  );
};

export default AllProducts;
