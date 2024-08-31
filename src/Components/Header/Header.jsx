import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../Logo/Logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className={style.header}>
      <div className={style.headerPages}>
        <img src={logo} alt="Логотип" />
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About Us</a>
        <a href="/help">Help</a>
      </div>
      <button onClick={handleButtonClick}>Book A Meeting</button>
    </div>
  );
};

export default Header;
