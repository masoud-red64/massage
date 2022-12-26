import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setIsShowSidebar }) {
  return (
    <div className="side-bar">
      <div className="sidebar-wrapper">
        <ul className="list">
          <NavLink to="/" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              صفحه نخست
            </a>
          </NavLink>
          <NavLink to="/services" className="item">
            <a href="" className="link">
              خدمات ما
            </a>
          </NavLink>
          <NavLink to="/teach" className="item">
            <a href="" className="link">
              آموزش
            </a>
          </NavLink>
          <NavLink to="/news" className="item">
            <a href="" className="link">
              اخبار
            </a>
          </NavLink>
          <NavLink to="/gallery" className="item">
            <a href="" className="link">
              گالری
            </a>
          </NavLink>
          <NavLink to="/about" className="item">
            <a href="" className="link">
              درباره اسپارس
            </a>
          </NavLink>
          <NavLink to="/contactus" className="item">
            <a href="" className="link" onClick={() => setIsShowSidebar(false)}>
              تماس با ما
            </a>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
