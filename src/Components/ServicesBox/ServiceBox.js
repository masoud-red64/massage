import React from "react";
import "./ServiceBox.css";
import Jump from "react-reveal/Jump";
export default function ServiceBox({ img, title, text }) {
  return (
    <Jump dely={1000} duration={2000}>
      <div className="service-box">
        <div className="img-service-box">
          <img src={img} alt="" />
        </div>
        <h1 className="title-service-box">{title}</h1>
        <p className="text-service-box">{text} </p>
      </div>
    </Jump>
  );
}
