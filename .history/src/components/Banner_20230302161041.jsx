import React from "react";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <img
        className={style.banner}
        src="./Banner-zapatillas.jpg"
        alt="Banner zapatillas"
      />
    </div>
  );
};

export default Banner;
