import React from "react";
import style from "./Title.module.scss";
import image from "../Title/Image/Image.png";

const Title = () => {
  return (
    <div className={style.title}>
      <div className={style.design}>
        <div className={style.titleTextes}>
          <h2>This headline is the gist of the Your whole Website </h2>
          <p>
            And the description of hero section is follow up message after the
            punch of a great headline. So, make it short, simple, descriptive
            and to the point.
          </p>
          <div className={style.btnAndText}>
            <button>Book A Meeting</button>
            <p>Here you can put secondary action statement & CTA</p>
          </div>
          <div className={style.media}>
            <a href="">LOGITECH</a>
            <a href="">GOOGLE</a>
            <a href="">AMAZON</a>
          </div>
        </div>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
