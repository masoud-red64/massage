import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          <img src="./images/brand.png" alt="" className="brand" />
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                صفحه نخست
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                خدمات ما
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                آموزش
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                اخبار
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                گالری
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                درباره اپارس
              </a>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                تماس ما
              </Link>
            </li>
          </ul>
        </div>
        <p>
          تمامی حقوق مادی و معنوی سایت متعلق به اسپارس ماساژ می باشد.طراحی توسط:
          <span> منسیکس </span>
        </p>
      </div>
      {isShowSidebar && <Sidebar  setIsShowSidebar={setIsShowSidebar} />}
    </>
  );
}
