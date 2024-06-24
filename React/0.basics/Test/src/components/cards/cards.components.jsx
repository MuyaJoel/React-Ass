import React from "react";

function CardsComponent({ src, alt }) {
  return (
    //html
    <>
      <img src={src} alt={alt} width={100} height={100} />
    </>
  );
}
export default CardsComponent;
