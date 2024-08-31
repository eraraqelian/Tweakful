import React from "react";
import style from "./Success.module.scss";
import image from "./Image/Image.png";

const Success = () => {
  return (
    <div className={style.sucBig}>
      <div className={style.itemBox}>
        <div className={style.itemText}>
          <h3>Success Story</h3>
          <p>
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy to streamline the lending process
          </p>
          <div className={style.socialBtn}>
            <p>LOGITECH</p>
            <button className={style.case}>Read Complete Case Study</button>
            <div className={style.slider}>
              <button className={style.swap}></button>
              <button className={style.swap}></button>
              <button className={style.swap}></button>
            </div>
          </div>
        </div>
        <div className={style.imageBox}>
          <div className={style.image}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
