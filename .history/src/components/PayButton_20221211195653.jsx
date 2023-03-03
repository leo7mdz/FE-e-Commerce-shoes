import React from "react";

const PayButton = ({ cart }) => {
  const handleClick = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/stripe/create-checkout-session",
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
  return <button onClick={handleClick}>PayButton</button>;
};

export default PayButton;
