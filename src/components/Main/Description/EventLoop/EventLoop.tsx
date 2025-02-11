import styled from "./index.module.css";

const EventLoop = () => {
  return (
    <div>
      <div className={styled.loopContainer}>
        <div className={styled.loop}>
          <span>Комплексность</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/parakeet-line/48/add-bookmark.png"
            alt="add-bookmark"
          />
        </div>
        <div className={styled.loop}>
          <span>Цена</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/price-tag-usd--v1.png"
            alt="price-tag-usd--v1"
          />
        </div>
        <div className={styled.loop}>
          <span>Индивидуальность</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-glyphs/30/people-skin-type-7.png"
            alt="people-skin-type-7"
          />
        </div>
        <div className={styled.loop}>
          <span>Качество</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/dotty/80/good-quality.png"
            alt="good-quality"
          />
        </div>
        <div className={styled.loop}>
          <span>Технологичность</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/electronics.png"
            alt="electronics"
          />
        </div>
        <div className={styled.loop}>
          <span>Надежность</span>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/windows/32/honesty.png"
            alt="honesty"
          />
        </div>
      </div>
    </div>
  );
};

export default EventLoop;
