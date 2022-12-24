import React from "react";
import Service from "./Service/Service";
import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      <h1 className="services-title">خدمات فوق العاده</h1>
      <div className="service-component">
        <div className="service1">
          <Service
            img={"./images/service1.png"}
            title={"ماساژ صورت"}
            text={"ماساژ حرفه ای صورت در مجموعه اسپارس"}
          />
        </div>
        <div className="service2">
          <Service
            img={"./images/service2.png"}
            title={"ماساژ با روغن"}
            text={"ماساژ حرفه ای با روغن در مجموعه اسپارس"}
          />
        </div>
        <div className="service3">
          <Service
            img={"./images/service3.png"}
            title={"آموزش ماساژ"}
            text={"آموزش ماساژ در کرج در مجموعه اسپارس"}
          />
        </div>
        <div className="service4">
          <Service
            img={"./images/service5.png"}
            title={"ماساژ سر"}
            text={"ماساژ حرفه ای سر در مجموعه اسپارس"}
          />
        </div>
        <div className="service5">
          <Service
            img={"./images/service4.png"}
            title={"یوگا و ماساژ"}
            text={"ماساژ و یوگا حرفه ای در مجموعه اسپارس"}
          />
        </div>
      </div>
    </div>
  );
}
