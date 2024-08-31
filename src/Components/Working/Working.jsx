import React from "react";
import style from "./Working.module.scss";
import workImage from "./WorkImage/Image1.png";

const Working = () => {
  return (
    <div className={style.working}>
      <div className={style.workingBox}>
        <h2>Benefits of working with us</h2>
        <div className={style.workingBenefit}>
          <div className={style.workBenefitFirst}>
            <div className={style.circle}>
              <img src={workImage} alt="" />
            </div>
            <div className={style.workBenefitText}>
              <h3>Time zones ain’t no thing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className={style.workBenefitFirst}>
            <div className={style.circle}>
              <img src={workImage} alt="" />
            </div>
            <div className={style.workBenefitText}>
              <h3>Time zones ain’t no thing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
        </div>
        <div className={style.workingBenefit}>
          <div className={style.workBenefitFirst}>
            <div className={style.circle}>
              <img src={workImage} alt="" />
            </div>
            <div className={style.workBenefitText}>
              <h3>Time zones ain’t no thing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className={style.workBenefitFirst}>
            <div className={style.circle}>
              <img src={workImage} alt="" />
            </div>
            <div className={style.workBenefitText}>
              <h3>Time zones ain’t no thing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
