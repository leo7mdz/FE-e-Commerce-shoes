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
      <p>
        Bienvenidos a nuestro sitio web de zapatillas, donde encontrarás una
        amplia selección de calzado deportivo de alta calidad y estilo moderno
        para hombres y mujeres. Ofrecemos una amplia gama de estilos para todos
        los gustos, desde zapatillas para correr, entrenar, hacer senderismo,
        hasta para usar en el día a día. Nuestros productos están diseñados para
        brindarte una experiencia de uso cómoda y duradera. Utilizamos
        materiales de alta calidad para que puedas tener el máximo rendimiento
        en tus actividades deportivas o simplemente para que luzcas bien en
        cualquier ocasión.
        <hr />
        En resumen, nuestra tienda en línea de zapatillas te ofrece una amplia
        variedad de opciones de calzado deportivo de alta calidad, con envío a
        cualquier parte del mundo y un servicio al cliente excepcional. ¡Explora
        nuestra selección de zapatillas y encuentra el par perfecto para ti!
      </p>
    </div>
  );
};

export default Banner;
