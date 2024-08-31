import React from "react";
import style from "./Partner.module.scss";

const Partner = () => {
  return (
    <div className={style.partnerSection}>
      <div className={style.partnerText}>
        <h2>The Is Closing Headline To Make A Impact For Call To Action</h2>
        <p>
          Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital
          lending strategy to streamline the lending process nowadays, it isn’t
          uncommon to see lenders rapidly
        </p>
        <button>Learn More About</button>
        <div className={style.sponsors}>
          <a>PHILIPS</a>
          <a>LOGITECH</a>
          <a>AMAZON</a>
          <a>FACEBOOK</a>
          <a>GOOGLE</a>
          <a>LINKEDIN</a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
