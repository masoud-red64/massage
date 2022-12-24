import React from "react";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="about-us">
      <div className="about-right">
        <h2>درباره ما</h2>
        <h1>استفاده از روغن های کاملا طبیعی</h1>
        <p>
          مجموعه ماساژ در کرج اسپارس با مدیریت سرکار خانم مرجان نوروزی تاسیس
          وزیر نظر سازمان فنی و حرفه ای کل و اداره کل ورزش و جوان فعالیت می
          نماید.همچنین مجوز انحصاری فعالیت در استان البرز نیزدر اختیار این
          آموزشگاه می باشد.
        </p>
        <button>درباره ما</button>
      </div>
      <div className="about-left">
        <img src="./images/aboutus.jpg" alt="" />
      </div>
    </div>
  );
}
