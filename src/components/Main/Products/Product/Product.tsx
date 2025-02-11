import styled from "./index.module.css";
import { Link } from "react-router-dom";
import { ProductOne } from "../../../../interfaces";
import { useEffect, useState } from "react";



const Product = () => {

  const [productAll, setProductAll] = useState<ProductOne[] | null>(null);

async function getData() {
    try {
      const req = await fetch(
        `https://e554e1318a7321af.mokky.dev/products`
      );
      const data = await req.json();
      setProductAll(data);
    } catch (error) {
      console.log("ERROR ->", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styled.container}>
      {productAll && productAll.map((product: ProductOne) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} className={styled.section} id="Products">
            <img
              src={product.imgUrl}
              alt="shortFlashlight"
              className={styled.img}
            />
            <h3>{product.name}</h3>
            <p className={styled.text}>{product.price}р</p>
            <button className={styled.btnOffer}>Подробнее</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
