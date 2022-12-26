import "./Header.css";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Fade, Flip } from "react-reveal";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>
        <Fade left>
          <h1 className="header-title">با اسپارس ریلکس کن و انرژی بگیر</h1>
        </Fade>
        <p className="header-text">
          مجموعه اسپارس کرج شامل مرکز خدمات ماساژ و آموزشگاه با مدیریت سرکار
          خانم نوروزی و دارای مجوز رسمی از سازمان فنی و حرفه ای کشور می باشد.
          <br /> پیش ثبت نام آغاز شد.
        </p>
        <div className="header-btn">
          <Flip right>
            <button className="header-service-btn">
              <Link to="/services"> خدمات ما</Link>

              <MdKeyboardArrowRight className="service-arrow-icon" />
            </button>
          </Flip>
          <Flip left>
            <button className="header-contact-btn">
              <Link to="/contactus">تماس با ما</Link>
              <MdKeyboardArrowRight className="about-arrow-icon" />
            </button>
          </Flip>
        </div>
      </div>
    </div>
  );
}
