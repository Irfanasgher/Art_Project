import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "./assets/service.css";
import { state } from "./serviceData";

const Services = () => {
  const [showContent, setShowContent] = useState(1);

  // const sliderRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const displayContent = (id) => {
    setShowContent(id);
    // sliderRef.current.slickGoTo(id);
  };
  return (
    <div className="services">
      <div className="row">
        <div className="col-12">
          <div className="services_list text-center">
            <ul>
              {state.services_list.map((item) => (
                <li key={item.id}>
                  <button
                    className={showContent === item.id ? "active" : ""}
                    onClick={() => displayContent(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="services_content">
            {state.services_content.map((item) => (
              <div
                className={`single_service ${
                  showContent === item.id ? "d-block" : "d-none"
                }`}
                key={item.id}
              >
                <h1 className="text-center service-heading mb-5">
                  {item.name}
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 service-left">
                      <div className="service-img">
                        <a href={`/service-detail/${item.id}`}>
                          <img src={item.image} alt={item.name} />
                        </a>
                      </div>
                      <div className="author">
                        <h4>
                          {item.artName.split("").map((itm, key) => (
                            <span
                              style={{
                                "animation-delay": `${0.5 * key}s`,
                                "animation-duration": `${
                                  item.artName.split("").length
                                }s`,
                              }}
                            >
                              {itm}
                            </span>
                          ))}
                        </h4>
                        <h6>
                          {item.artBy.split("").map((itm, key) => (
                            <span
                              style={{
                                "animation-delay": `${0.5 * key}s`,
                                "animation-duration": `${
                                  item.artName.split("").length
                                }s`,
                              }}
                            >
                              {itm}
                            </span>
                          ))}
                        </h6>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="service-detail">
                        <div className="rotate">
                          <h4>
                            {item.date.year}/{item.date.day}
                          </h4>
                        </div>
                        <p>{item.description}</p>
                        <a href={`/service-detail/${item.id}`}>{item.btn}</a>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="service_slider">
            <Slider {...settings}>
              {state.services_content.map((item) => (
                <div key={item.id} className="slider-item">
                  <div className="slide-img">
                    <a href={`/service-detail/${item.id}`} className="s-link">
                      <img
                        src={item.image}
                        className="slider-image"
                        alt="dsd"
                      />
                    </a>
                    <p className="slider-date">
                      {item.date.year}/{item.date.day}
                    </p>
                    <div className="date-counter">
                      <CountUp start={0} end={item.date.year} duration={4} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
