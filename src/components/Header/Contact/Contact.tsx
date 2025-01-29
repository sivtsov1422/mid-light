
import styled from "./index.module.css";

const Contact = () => {
  return (
    <div className={styled.container}>
      <div className={styled.socialContainer}>
        <a href="mailto:midlight31@mail.ru">Почта</a>
        <a href="https://wa.me/+79205665764" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="tel:+79205665764" target="_blank" rel="noopener noreferrer">+7-920-566-5764</a>
        <a href="tel:+79524255085" target="_blank" rel="noopener noreferrer">+7-952-425-5085</a>
      </div>
    </div>
  );
};

export default Contact;
