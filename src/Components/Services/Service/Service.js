import React from "react";
import "./Service.css";
import { Roll } from "react-reveal";

export default function Service({ img, title, text }) {
  return (
    <Roll left>
      <div className="service">
        <img src={img} alt="" className="service-img" />
        <h1 className="service-title">{title}</h1>
        <p className="service-text">{text}</p>
      </div>
    </Roll>
  );
}
