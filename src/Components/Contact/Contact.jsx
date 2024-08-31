import React from "react";
import Header from "../Header/Header";
import style from "./Contact.module.scss";
import vanceover from "./Image/vanecover.png";
import sanFrancisco from "./Image/sanFrancisco.png";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <Header />
      <div className={style.contactUs}>
        <div className={style.contact}>
          <div className={style.contactText}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about the subscription or are not sure
              which plan is right for you, contact our team and let’s schedule a
              call.
            </p>
            <div className={style.contactButtons}>
              <button>
                <p>Call us</p>
                <p>(669) 984-9439</p>
              </button>
              <button>
                <p>Email us</p>
                <p>hello@openthrive.com</p>
              </button>
            </div>
            <div className={style.contactSponsors}>
              <a href="">GOOGLE</a>
              <a href="">AMAZON</a>
              <a href="">INTEL</a>
              <a href="">ATLASSIAN</a>
            </div>
          </div>
          <div className={style.contactRegister}>
            <div className={style.register}>
              <h3>Let’s Talk 👋</h3>
              <p>
                If you have any question or issue’s to use our product. Fill the
                form below. We’ll help you
              </p>
              <div className={style.registerInp}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={style.inp}
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className={style.inp}
                />
              </div>
              <input
                type="text"
                placeholder="Select one topic"
                className={style.topic}
              />
              <input
                type="text"
                placeholder="Write Your Message"
                className={style.message}
              />
              <button>contact us</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ourOffice}>
        <div className={style.officeText}>
          <h3>Our offices</h3>
          <p>
            Amazing cities, totally tricked out offices. Explore the world of
            Tweakful.
          </p>
        </div>
        <div className={style.office}>
          <div className={style.officeMap}>
            <img src={vanceover} alt="" />
            <h4>Vancouver Office</h4>
            <p>1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
            <button>Open in Maps</button>
          </div>
          <div className={style.officeMap}>
            <img src={sanFrancisco} alt="" />
            <h4>Vancouver Office</h4>
            <p>1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
            <button>Open in Maps</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
