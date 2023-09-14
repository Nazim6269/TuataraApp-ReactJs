import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../Components/Products";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      setProducts(data);
    };

    fetchCategory();
  }, []);

  if (products.length === 0) {
    return (
      <div className=" h-[55vh] flex justify-center items-center text-4xl ">
        Loading ..
      </div>
    );
  } else {
    return (
      <div>
        <Products products={products} />
      </div>
    );
  }
};

export default CategoryProducts;
