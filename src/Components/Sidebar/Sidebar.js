import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ setIsShowSidebar }) {
  return (
    <div className="side-bar">
      <div className="sidebar-wrapper">
        <ul className="list">
          <li className="item active">
            <Link
              to="/"
              href=""
              className="link"
              onClick={() => setIsShowSidebar(false)}
            >
              صفحه نخست
            </Link>
          </li>
          <li className="item">
            <a href="" className="link">
              خدمات ما
            </a>
          </li>
          <li className="item">
            <a href="" className="link">
              آموزش
            </a>
          </li>
          <li className="item">
            <a href="" className="link">
              اخبار
            </a>
          </li>
          <li className="item">
            <a href="" className="link">
              گالری
            </a>
          </li>
          <li className="item">
            <a href="" className="link">
              درباره اسپارس
            </a>
          </li>
          <li className="item">
            <Link
              to="/contactus"
              href=""
              className="link"
              onClick={() => setIsShowSidebar(false)}
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
