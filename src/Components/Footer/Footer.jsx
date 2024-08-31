import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerList}>
        <a href="#" className={style.footerTitle}>
          Tweakful
        </a>
        <div className={style.footerInfo}>
          <div className={style.footerText}>
            {" "}
            <h3>About Tweakful</h3>
            <p>
              Tweakful is HubSpot Theme Based On Engagement Design Framework,
              designed & developed by Openthrive.
            </p>
            <button>Book A Meeting</button>
          </div>
          <div className={style.navLink}>
            <div className={style.navFirstLink}>
              <a href="">Contact</a>
              <a href="">Career</a>
              <a href="">Privacy Plocy</a>
              <a href="">Terms Of Services</a>
              <a href="">GDPR</a>
              <a href="">FAQs</a>
            </div>
            <div className={style.navSecondLink}>
              <a href="">Blog</a>
              <a href="">Capabilities</a>
              <a href="">Resources</a>
              <a href="">Partnership Integration</a>
            </div>
          </div>
        </div>
        <div className={style.footerEnd}>
          <p className={style.b2b}>
            B2B website and engagement design solution that transform marketing
            and sales performance like never before.
          </p>
          <p className={style.openthrive}>
            © 2015-2020 Openthrive. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
