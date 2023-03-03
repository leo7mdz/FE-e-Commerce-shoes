import React, { useEffect } from "react";
import style from "./header.module.css";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetTotals } from "../slice/cartSlice";

const Header = () => {
  let totalItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTotals());
  }, [totalItems, GetTotals]);

  return (
    <header className={style.header}>
      <Link to="/">
        <p className={style.title}>
          <span className={style.span}>mdz</span> Shop
        </p>
      </Link>

      <nav className={style.nav}>
        <Link className={style.cart} to="/cart">
          <BiCartAlt className={style.icon} />
          {totalItems.cartTotalQuantity > 0 && (
            <span className={style.itemTotals}>
              {totalItems.cartTotalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
