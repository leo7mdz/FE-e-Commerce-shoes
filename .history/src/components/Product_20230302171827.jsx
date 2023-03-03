import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../api/productsApi";
import { addToCart } from "../slice/cartSlice";
import style from "./product.module.css";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isSuccess, data } = useGetProductQuery(id);

  const handleClick = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className={style.containerProduct}>
      {isSuccess && (
        <div className={style.card}>
          <div className={style.twoColumn}>
            <div className={style.cardTop}>
              <img src={data.Imagen} alt={data.Nombre} />
            </div>
            <div className={style.cardBody}>
              <h2 className={style.nombre}>{data.Nombre}</h2>
              <button className={style.button}>envio gratis</button>
              <p className={style.price}>${data.Precio}</p>
              <button
                className={style.addToCart}
                onClick={() => handleClick(data)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
          <p className={style.description}>
            <b>Descripcion:</b> {data.Descripcion}
          </p>
          <p className={style.gender}>
            <b>Genero:</b> {data.Genero}
          </p>
          <p className={style.appropiate}>
            <b>Adecuado para:</b> {data.Adecuado}
          </p>
          <p className={style.material}>
            <b>Material:</b> {data.Material}
          </p>
          <p className={style.benefits}>
            <b>Beneficios:</b> {data.Beneficios}
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
