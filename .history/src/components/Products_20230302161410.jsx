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
    <div>
      <h1>Productos</h1>
      <div className={style.gridProducts}>
        {products.map((product) => (
          <Card key={product.Id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
