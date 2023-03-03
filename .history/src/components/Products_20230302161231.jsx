import React from "react";
import { useGetProductsQuery } from "../api/productsApi";
import Card from "./Card";
import style from "./gridProducts.module.css";

const Products = () => {
  const {
    data: products = [],
    isError,
    isLoading,
    isSuccess,
  } = useGetProductsQuery();

  //console.log(products, isLoading, isError, isSuccess);
  return (
    <div className={style.gridProducts}>
      <h1>Productos</h1>
      {products.map((product) => (
        <Card key={product.Id} product={product} />
      ))}
    </div>
  );
};

export default Products;
