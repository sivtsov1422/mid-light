import { useState } from "react";
import { SliderProps } from "../../interfaces";
import styled from "./slider.module.css";
import arrow from "../../imgs/icons/arrow.png";
import cn from "classnames";

const FADE_DURATION = 300;

const Slider = ({ imgs }: SliderProps) => {
  const [slide, setSlide] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [currentTimer, setCurrentTimer] = useState<any>();

  const handleClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((s) => s + move);
      setFadeState("fade-in");
    }, FADE_DURATION);
    clearTimeout(currentTimer);
    setFadeState("fade-out");
    setCurrentTimer(timer);
  };

  return (
    <div className={styled.slider}>
      <div
        className={cn(styled.slide, styled[fadeState])}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
      >
        <div className={styled.left}>
          <div className={styled.text}>{imgs[slide].text}</div>
        </div>
        <div
          className={styled.right}
          style={{ backgroundImage: `url(${imgs[slide].image})` }}
        ></div>
      </div>
      {slide > 0 && (
        <button
          className={cn(styled.arrow, styled.arrowLeft)}
          onClick={() => handleClick(-1)}
        >
          <img className={styled.arrowIn} src={arrow} alt="arrow" />
        </button>
      )}
      {slide < imgs.length - 1 && (
        <button
          className={cn(styled.arrow, styled.arrowRight)}
          onClick={() => handleClick(1)}
        >
          <img className={styled.arrowIn} src={arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Slider;
