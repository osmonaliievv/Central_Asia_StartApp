import React from "react";
import headerLogo from "../../assets/HeaderImg/Logo.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/">
            <img src={headerLogo} alt="Header Logo" />
          </NavLink>
        </div>
        <div className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">Программа</li>
            <li className="header__nav-item">Спикеры </li>
            <li className="header__nav-item">Новости </li>
            <li className="header__nav-item">Билеты</li>
            <li className="header__nav-item">Партнерам</li>
            <li className="header__nav-item">Стартаперам</li>
            <li className="header__nav-item">FAQ</li>
          </ul>
        </div>
        <div className="header__language_button">
          <select name="" id="">
            <option value="">EN</option>
            <option value="">FR</option>
            <option value="">ES</option>
            <option value="">DE</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
