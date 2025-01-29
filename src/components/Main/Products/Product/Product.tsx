import styled from "./index.module.css";
import { Link } from "react-router-dom";
import productAll from "../../../../data/product.json";
import { ProductOne } from "../../../../interfaces";



const Product = () => {
  return (
    <div className={styled.container}>
      {productAll.products.map((product: ProductOne) => (
        <div>
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
