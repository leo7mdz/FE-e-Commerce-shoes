import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";
const Card = ({ product }) => {
  const { Precio, Nombre, Imagen, Id } = product;

  const cuota = (Precio / 3).toFixed(3);

  return (
    <div>
      <div className={style.card}>
        <div className={style.cardTop}>
          <Link to={`/product/${Id}`}>
            <img src={Imagen} alt="" className={style.img} />
          </Link>
        </div>
        <div className={style.cardBody}>
          <Link to={`/product/${Id}`}>
            <h4 className={style.productName}>{Nombre}</h4>
          </Link>
          <p className={style.productPrice}>${Precio}</p>
          <p className={style.quota}> 3 cuotas de ${cuota}</p>
          <button className={style.send}>envio gratis</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
