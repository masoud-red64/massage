import React from "react";
import "./ServiceBox.css";

export default function ServiceBox({ img, title, text }) {
  return (
    <div className="service-box">
      <img loading="lazy" src={img} alt="" />

      <h1 className="title-service-box">{title}</h1>
      <p className="text-service-box">{text} </p>
    </div>
  );
}
