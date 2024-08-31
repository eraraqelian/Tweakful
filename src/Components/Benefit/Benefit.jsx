import React from "react";
import style from "./Benefit.module.scss";
import grid from "./image/Grid.png";
import star from "./image/Star.png";
import layers from "./image/Layers.png";

const Benefit = () => {
  return (
    <div className={style.benefit}>
      <div className={style.boxes}>
        <div className={style.firstBox}>
          <div className={style.firstBenefit}>
            <div className={style.circle}>
              <img src={grid} alt="" />
            </div>
            <div className={style.benefitText}>
              <h2>First Benefit</h2>
              <p>
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
          <div className={style.firstBenefit}>
            <div className={style.circle}>
              <img src={star} alt="" />
            </div>
            <div className={style.benefitText}>
              <h2>Second Benefit</h2>
              <p>
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
          <div className={style.firstBenefit}>
            <div className={style.circle}>
              <img src={layers} alt="" />
            </div>
            <div className={style.benefitText}>
              <h2>Third Benefit</h2>
              <p>
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices a few
              </p>
            </div>
          </div>
        </div>
        <div className={style.secondBox}>
          <h2>Headline of Modern and Digital Lending Platform Seconds</h2>
          <p>
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy
          </p>
          <button>Learn More About</button>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
