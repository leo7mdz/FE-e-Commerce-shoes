import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, GetTotals } from "../slice/cartSlice";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import PayButton from "./PayButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const details = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  //console.log(details);

  useEffect(() => {
    dispatch(GetTotals());
  }, []);

  return (
    <div className={style.containerCart}>
      <Link to="/"> &#8592; Seguir comprando</Link>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item) => (
              <ItemCart item={item} key={item.Id} />
            ))}
          </div>

          <button onClick={() => dispatch(clearCart())}>Limpiar carrito</button>

          <div>
            <p>Productos totales . . . . . . . {details.cartTotalQuantity} </p>
            <p>Subtotal . . . . . . . . . $ {details.cartTotalAmount}</p>
            <p>Envio . . . . . . . . . Sin costo</p>
            <p>Total . . . . . . . . . $ {details.cartTotalAmount}</p>
          </div>

          <PayButton cart={cart} />
        </div>
      ) : (
        <p>No hay productos aun</p>
      )}
    </div>
  );
};

export default Cart;
