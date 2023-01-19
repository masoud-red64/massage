import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setIsShowSidebar, onScroll }) {
  return (
    <div className="side-bar">
      <div className="sidebar-wrapper">
        <ul className="list">
          <NavLink to="/" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              صفحه نخست
            </a>
          </NavLink>
          <NavLink to="/services" className="item" onClick={onScroll}>
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              خدمات ما
            </a>
          </NavLink>
          <NavLink to="/teach" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              آموزش
            </a>
          </NavLink>
          <NavLink to="/turn" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              نوبت دهی
            </a>
          </NavLink>
          <NavLink to="/gallery" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              گالری
            </a>
          </NavLink>
          <NavLink to="/about" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              درباره اسپارس
            </a>
          </NavLink>
          <NavLink to="/contactus" className="item" onClick={onScroll}>
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              تماس با ما
            </a>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
