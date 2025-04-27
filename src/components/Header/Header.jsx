import React, { useState, useEffect, useRef } from "react";
import headerLogo from "../../assets/HeaderImg/Logo.svg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // создаём ссылку на меню

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Функция для закрытия меню при клике вне меню
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/">
            <img src={headerLogo} alt="Header Logo" />
          </NavLink>
        </div>

        {/* Бургер */}
        <div className="header__burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Меню с привязкой ref */}
        <div
          ref={menuRef}
          className={`header__menu ${menuOpen ? "active" : ""}`}
        >
          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">Программа</li>
              <li className="header__nav-item">Спикеры</li>
              <li className="header__nav-item">Новости</li>
              <li className="header__nav-item">Билеты</li>
              <li className="header__nav-item">Партнерам</li>
              <li className="header__nav-item">Стартаперам</li>
              <li className="header__nav-item">FAQ</li>
            </ul>
          </div>

          <div className="header__language_button">
            <select>
              <option value="">EN</option>
              <option value="">FR</option>
              <option value="">ES</option>
              <option value="">DE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
