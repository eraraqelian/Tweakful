import React from "react";
import style from "./Process.module.scss";

const Process = () => {
  return (
    <div className={style.process}>
      <div className={style.processFollow}>
        <h2 className={style.title}>The process we follow</h2>
        <div className={style.workStyles}>
          <div className={style.ideate}>
            <div className={style.ideateDesign}>
              <div className={style.blueCircle}></div>
            </div>
            <div className={style.ideateText}>
              <h3>Ideate</h3>
              <p>Turn your idea from concept to MVP</p>
            </div>
          </div>
          <div className={style.ideate}>
            <div className={style.ideateDesign}>
              <div className={style.blueCircle}></div>
            </div>
            <div className={style.ideateText}>
              <h3>Design</h3>
              <p>Sketch out the product to align the user needs</p>
            </div>
          </div>
          <div className={style.ideate}>
            <div className={style.ideateDesign}>
              <div className={style.blueCircle}></div>
            </div>
            <div className={style.ideateText}>
              <h3>Develop</h3>
              <p>Convert the designs into a live application</p>
            </div>
          </div>
          <div className={style.ideate}>
            <div className={style.ideateDesign}>
              <div className={style.blueCircle}></div>
            </div>
            <div className={style.ideateText}>
              <h3>Deploy</h3>
              <p>Launching the application to the market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
