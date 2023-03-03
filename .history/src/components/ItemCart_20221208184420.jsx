import React from "react";
import { useDispatch } from "react-redux";
import { clearItem, incrementCart } from "../slice/cartSlice";
import style from "./itemCart.module.css";
import { BiTrashAlt } from "react-icons/bi";

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();
  let total = (item.Precio * item.Cantidad).toFixed(3);

  const handleClick = (item) => {
    dispatch(incrementCart(item));
  };

  const handleDelete = (item) => {
    dispatch(clearItem(item));
  };
  return (
    <div>
      <div className={style.card}>
        <img src={item.Imagen} alt={item.Nombre} className={style.imgCart} />
        <h5 className={style.name}>{item.Nombre}</h5>
        <span className={style.quantity}>Cantidad {item.Cantidad}</span>
        <button className={style.add} onClick={() => handleClick(item)}>
          +
        </button>
        <p className={style.total}>$ {total}</p>
        <BiTrashAlt className={style.icon} onClick={() => handleDelete(item)} />
      </div>
    </div>
  );
};

export default ItemCart;
