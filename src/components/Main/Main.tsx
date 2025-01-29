import { useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Description from "./Description/Description";
// import GetOffer from "./GetOffer/GetOffer";
import styled from "./index.module.css";
import Modal from "./Modal/Modal";
import Products from "./Products/Products";
import Qulity from "./Qulity/Qulity";
const Main = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styled.main}>
      <Description />
      <Products />
      <Qulity />
      <AboutUs />
      <div className={styled.modalContainer}>
        <button
          onClick={() => setModalActive(true)}
          className={styled.modalBtn}
          id="Modal"
        >
          Оставить заявку
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className={styled.modalTop}>
            <h3>Оставить заявку</h3>
            <p>Оставьте контактные данные и мы обязательно свяжемся с вами</p>
          </div>
          <br />
          <br />
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styled.form}
          >
            <input
              type="hidden"
              name="access_key"
              value="301ad63f-d43c-42bd-9f99-50ccef055dce"
            ></input>
            <div>
              <input type="text" required placeholder="Имя" name="name" />
            </div>
            <div>
              <input type="email" required placeholder="Почта" name="email" />
            </div>
            <div>
              <input
                type="tel"
                autoComplete="off"
                required
                placeholder="Телефон"
                name="number"
              />
            </div>
            <br />
            <br />
            <br />
            <button type="submit" className={styled.submitBtn}>
              Отправить
            </button>
          </form>
        </Modal>
      </div>
      {/* <GetOffer /> */}
    </div>
  );
};

export default Main;
