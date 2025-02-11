import { Link } from "react-router-dom";
import Logo from "../Header/Logo/Logo";
import styled from "./style.module.css";

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.logo}>
        <Logo />
      </div>
      <div className={styled.footerList}>
        <h3>Связаться с нами:</h3>
        <a href="mailto:midlight31@mail.ru">midlight31@mail.ru</a>
        <a href="https://wa.me/+79205665764">WhatsApp</a>
        <a href="tel:+79205665764" target="_blank" rel="noopener noreferrer">
          +7-920-566-5764
        </a>
        <a href="tel:+79524255085" target="_blank" rel="noopener noreferrer">
          +7-952-425-5085
        </a>
      </div>
      <div className={styled.footerList}>
        <h3>Товары:</h3>
        <Link to="/mid-light/products/1" className={styled.linkProduct}>
          Фонарь ML-120
        </Link>
        <Link to="/mid-light/products/2" className={styled.linkProduct}>
          Фонарь ML-90
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
