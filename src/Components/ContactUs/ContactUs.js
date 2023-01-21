import React from "react";
import "./ContactUs.css";
import { BsTelegram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Container } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container>
      <div className="contact-us">
        <div className="contact-right">
          <h1 className="name">ابوالفضل خبازی</h1>
          <h2 className="age"> 23 ساله</h2>
          <h3 className="experience">سابقه کار: 3سال</h3>
          <h4 className="phone-number">
            <a href="tel:+989154321234">09154321234</a>
          </h4>
          <h5 className="address">یزد، میبد، خیابان کارگران</h5>
          <div className="social-media">
            <ul>
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
          </div>
        </div>
        <div className="contact-left">
          <img src="./images/concat.webp" alt="" />
        </div>
      </div>
    </Container>
  );
}
