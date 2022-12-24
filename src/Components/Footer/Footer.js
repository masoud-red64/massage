import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BsTelegram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import RubberBand  from "react-reveal/RubberBand";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <div className="sub-footer">
        <Row>
          <Col xxl={4} xl={4} md={4} sm={12} className="footer-about-us">
            <h1 className="footer-title">درباره ما</h1>
            <p className="footer-text">
              مجموعه اسپارس با مدیریت سرکار خانم مرجان نوروزی تاسیس وزیر نظر
              سازمان فنی و حرفه ای کل و اداره کل ورزش و جوان فعالیت می
              نماید.همچنین مجوز انحصاری فعالیت در استان البرز نیزدر اختیار این
              آموزشگاه می باشد.
            </p>
            <p className="footer-text">
              به علت وضعیت کرونا تعطیل می باشد. از طریق سایت و شبکه های اجتماعی
              ما را دنبال کنید از طریق واتس آپ با ما در تماس باشید.
            </p>
          </Col>
          <Col xxl={4} xl={4} md={3} sm={12} className="footer-helpful-link">
            <h1 className="footer-title">لینک های مفید</h1>
            <ul className="link-list">
              <li className="link-item">انجمن ماساژ</li>
              <li className="link-item">انجمن صنفی ماساژ</li>
              <li className="link-item">فدراسیون پزشکی ورزشی</li>
              <li className="link-item">اداره ورزش و جوانان</li>
              <li className="link-item">اداره فنی و حرفه ای کل کشور</li>
              <li className="link-item">اداره فنی و حرفه ای استان البرز</li>
            </ul>
          </Col>
          <Col xxl={4} xl={4} md={5} sm={12} className="footer-contact-us">
            <RubberBand delay={500}>
              <h1 className="footer-title">تماس با ما</h1>
              <p className="footer-text email">
                <AiOutlineMail className="email-icon" />
                marjan.norozi10@gmail.com
              </p>
              <p className="footer-text website">
                <GiEarthAsiaOceania className="web-icon" />
                www.sparsmassage.ir
              </p>
              <ul className="social-icons">
                <li>
                  <a href="https://t.me/masoud_red64">
                    {" "}
                    <BsTelegram />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/09361290345">
                    {" "}
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/masoud_red64">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </ul>
            </RubberBand>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
