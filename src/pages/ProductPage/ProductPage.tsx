import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductOne } from "../../interfaces";
import styled from "./style.module.css";
import price from "../../imgs/icons/icons8-цена-32.png";
import Modal from "../../components/Main/Modal/Modal";

const ProductPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const params = useParams();
  const [productData, setProductData] = useState<ProductOne | null>(null);

  // const onSubmit = async (event: any) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "301ad63f-d43c-42bd-9f99-50ccef055dce");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //   }
  // };

  async function getData() {
    try {
      const req = await fetch(
        `https://e554e1318a7321af.mokky.dev/products/${params.id}`
      );
      const data = await req.json();
      setProductData(data);
    } catch (error) {
      console.log("ERROR ->", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styled.fullContainer}>
      {productData && (
        <div className={styled.container}>
          <div>
            <img
              src={productData.imgUrl}
              alt="productImg"
              className={styled.productImg}
            />
          </div>
          <div className={styled.main}>
            <h2>{productData.name}</h2>
            <div className={styled.datail}>
              <p className={styled.p}>
                <div className={styled.character}>Материал:</div>{" "}
                <span>{productData.material}</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Длинна:</div>{" "}
                <span>{productData.height}м</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Вес:</div>{" "}
                <span>{productData.weight}кг</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Потреб. мощность:</div>{" "}
                <span>{productData.potreb}W</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Напряжение:</div>{" "}
                <span>{productData.napryag}V</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Число светодиодов:</div>{" "}
                <span>{productData.count}шт</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Угол свечения:</div>{" "}
                <span>{productData.angle}°</span>
              </p>
              <p className={styled.p}>
                <div className={styled.character}>Краска:</div>{" "}
                <span>{productData.paint}</span>
              </p>
            </div>
            <div className={styled.priceContainer}>
              <img src={price} />
              <p>{productData.price}р.</p>
            </div>
            <button
              className={styled.btnOffer}
              onClick={() => setModalActive(true)}
            >
              Оформить заказ
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
              <div className={styled.modalTop}>
                <h3>Оформление заказа</h3>
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
                <div className={styled.inputContainer}>
                  <span>Имя</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Введите имя"
                    autoComplete="off"
                  />
                </div>
                <div className={styled.inputContainer}>
                  <span>Почта</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Введите почту"
                    autoComplete="off"
                  />
                </div>
                <div className={styled.inputContainer}>
                  <span>Телефон</span>
                  <input
                    type="number"
                    name="number"
                    required
                    placeholder="Введите номер телефона"
                    autoComplete="off"
                  />
                </div>
                <div className={styled.radioContainer}>
                  <span>Какой товар вас интересует</span>
                  <div>
                    <input type="radio" name="product" id="ml" value="ML-90" />
                    <label htmlFor="90">ML-90</label>

                    <input
                      type="radio"
                      name="product"
                      id="ML-120"
                      value="ML-120"
                    />
                    <label htmlFor="120">ML-120</label>
                  </div>
                </div>
                <div className={styled.countContainer}>
                  <span>Выберите количество</span>
                  <input type="number" name="count" placeholder="0" min="0" />
                </div>
                <span className={styled.quote}>
                  Оставьте заявку и мы обязательно с вами свяжемся в течении
                  суток!
                </span>
                <button className={styled.sendBtn} type="submit">
                  Заказать
                </button>
              </form>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

// 301ad63f-d43c-42bd-9f99-50ccef055dce
