import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Services from "./Components/Services/index.js";
import ServicesDetail from "./Components/Services/subService.js";
import './index.css';
import "./Components/Services/assets/service.css"
import CollectionMain from "./Components/Collections/CollectionMain"
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/CollectionMain" element={<CollectionMain />} />
          <Route exact path="/service" element={<Services />} />
          <Route exact path="/service-detail/:id" element={<ServicesDetail />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
