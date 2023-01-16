import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

export default function Navbar({ onScroll }) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <div className="wrapper">
          {isShowSidebar ? (
            <IoMdClose
              className="close-icon"
              onClick={() => setIsShowSidebar(false)}
            />
          ) : (
            <BiMenu
              className="menu-icon"
              onClick={() => setIsShowSidebar(true)}
            />
          )}
          <img
            loading="lazy"
            src="./images/brand.png"
            alt=""
            className="brand"
          />
          <ul className="nav-list">
            <NavLink to="/" className="nav-item nav-link">
              صفحه نخست
            </NavLink>

            <NavLink
              to="/services"
              className="nav-item nav-link"
              onClick={onScroll}
            >
              خدمات ما
            </NavLink>
            <NavLink to="/teach" className="nav-item nav-link">
              آموزش
            </NavLink>
            <NavLink to="/turn" className="nav-item nav-link">
              نوبت دهی
            </NavLink>
            <NavLink to="/gallery" className="nav-item nav-link">
              گالری
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              درباره اپارس
            </NavLink>
            <NavLink
              to="/contactus"
              className="nav-item nav-link"
              onClick={onScroll}
            >
              تماس با ما
            </NavLink>
          </ul>
        </div>
        <p>
          تمامی حقوق مادی و معنوی سایت متعلق به اسپارس ماساژ می باشد.طراحی توسط:
          <span> منسیکس </span>
        </p>
      </div>
      {isShowSidebar && (
        <Sidebar setIsShowSidebar={setIsShowSidebar} onScroll={onScroll} />
      )}
    </>
  );
}
