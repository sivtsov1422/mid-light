import { Link } from "react-router-dom";
import styled from "./index.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styled.container}>
      <span className={styled.span}>M</span>
      <span className={styled.span}>I</span>
      <span className={styled.span}>D</span>
      <span> </span>
      <span className={styled.span}>L</span>
      <span className={styled.span}>I</span>
      <span className={styled.span}>G</span>
      <span className={styled.span}>H</span>
      <span className={styled.span}>T</span>
    </Link>
  );
};

export default Logo;
