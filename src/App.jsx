import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Title from "./Components/Title/Title";
import Benefit from "./Components/Benefit/Benefit";
import Working from "./Components/Working/Working";
import Success from "./Components/Success/Success";
import Process from "./Components/Process/Process";
import Partner from "./Components/Partner/Partner";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
// import Home from "./Components/Home/Home"; // Если у вас есть компонент Home

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* Добавьте другие маршруты по необходимости */}
        </Routes>
        <Title />
        <Benefit />
        <Working />
        <Success />
        <Process />
        <Partner />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
