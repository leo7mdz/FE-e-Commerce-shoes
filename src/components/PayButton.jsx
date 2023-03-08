import React from "react";
import style from "./paybutton.module.css";

const PayButton = ({ cart }) => {
  const handleClick = async () => {
    try {
      const res = await fetch(
        "https://be-e-commerce-shoes.vercel.app/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: cart,
          }),
        }
      );
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <button className={style.payButton} onClick={handleClick}>
      Comprar
    </button>
  );
};

export default PayButton;
