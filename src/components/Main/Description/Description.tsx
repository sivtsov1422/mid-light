import Slider from "../../Slider/Slider";
import styled from "./index.module.css";
import image from "../../../imgs/pictures/photo_2024-12-26_21-32-51.jpg";
import EventLoop from "./EventLoop/EventLoop";

const Description = () => {

  return (
    <div className={styled.container}>
      <section className={styled.section}>
        <div className={styled.textContainer}>
          <h2>Индивидуальная разработка под предпочтения клиента</h2>
          <p className={styled.text}>
            Выбирая MID light, вы не просто приобретаете фонарные столбы — вы
            инвестируете в надежное и долговечное решение для освещения, которое
            обеспечит безопасность и уют в вашем пространстве.
          </p>
          <a href="#Products" className={styled.btn}>
            К товарам
          </a>
          <a href="#Modal" className={styled.btn2}>
            Связаться
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Slider
            imgs={[
              {
                id: 1,
                text: "MID light: Ваш надежный партнер в освещении!",
                image:
                  "https://sun9-39.userapi.com/impg/n2wmZpxk4aOhewUze6bSH2mqrpO0p3zYSK4RoQ/SSX0iA0H86I.jpg?size=1280x720&quality=95&sign=e788df527f71320920c9f312f553bdb1&type=album",
              },
              {
                id: 2,
                text: "Наше производство отличается высоким уровнем индивидуализации, предлагая каждому клиенту уникальные решения.",
                image:
                  "https://sun9-67.userapi.com/impg/2SzQZmYVIWuWS8euXemias6wpyQFXZQv0Kgk-Q/KsG2r6BvJZk.jpg?size=1280x1280&quality=95&sign=bf25726bfab94a4d42e8907a06bc907f&type=album",
              },
              {
                id: 3,
                text: "Изделия характеризуются надежными креплениями, качественным покрытием и высококачественными материалами.",
                image:
                  "https://sun9-23.userapi.com/impg/HBUn5b_eXxDD6EpekF4ltEe9VAxtHqaBavqTSg/GgPVwIXr8uo.jpg?size=1280x1280&quality=95&sign=2fbd020b3663810744dcf458fa40567b&type=album",
              },
              {
                id: 4,
                text: "Выбирая нас, вы получаете надежное решение на долгие годы!",
                image,
              },
            ]}
          />
        </div>
      </section>
      <section>
        <EventLoop />
      </section>
    </div>
  );
};

export default Description;
