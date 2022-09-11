import React from "react";
import img1 from "./assets/Layer9.png";
import buttonImage from "./assets/Rectangle 31 copy.png";
import M from "./assets/M.png";
import { state } from "./serviceData";
import { useParams } from "react-router-dom";
const SubService = () => {
  const params = useParams();

  const paramId = parseInt(params.id);
  const data = state.services_content.find((item) => item.id === paramId);
  return (
    <div className="subService mt-5">
      <div className="sub">
        <h1 className="text-center service-heading mb-5">{data.name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 service-left">
              <div className="service-img">
                <a href="#dsd">
                  <img src={data.image} alt={data.name} />
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="subService-detail">
                <div className="rotate">
                  <h4>
                    {data.date.year}/{data.date.day}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="author">
        <h4>
          {data.artName.split("").map((itm, key) => (
            <span
              style={{
                "animation-delay": `${0.5 * key}s`,
                "animation-duration": `${data.artName.split("").length}s`,
              }}
            >
              {itm}
            </span>
          ))}
        </h4>
        <h6>
          {data.artBy.split("").map((itm, key) => (
            <span
              style={{
                "animation-delay": `${0.5 * key}s`,
                "animation-duration": `${data.artName.split("").length}s`,
              }}
            >
              {itm}
            </span>
          ))}
        </h6>
      </div>
      <div className="container">
        <div className="descParagraph ">
          <div className="par">
            <p>{data.d1}</p>
            <p>{data.d2}</p>
            <p>{data.d3}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="end">
          <p>Let's Get In Touch</p>
          <a href="">
            <img src={buttonImage} alt="" />
          </a>
        </div>

        <div className="m_tag">
          <img src={M} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubService;
