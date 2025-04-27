import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/HomePageImg/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background">
        <div className="footer__container">
          <div className="footer__socialMedias">
            <div className="footer__socialMedias1">
              <img src={logoFooter} alt="" />
            </div>
            <div className="footer__socialMedias2">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="footer__socialMedias3">copy 2025</div>
          </div>
          <div className="footer__contacts1">
            <div className="footer__title">Контакты</div>
            <ul className="footer__list">
              <li className="footer__li">Айжан Алишерова</li>
              <li className="footer__li">
                Руководитель акселерационных программ Accelerate Prosperity
              </li>
              <li className="footer__li">aijan.alisherova@akdn.org</li>
              <li className="footer__li">+996 700 440 153</li>
            </ul>
          </div>
          <div className="footer__contacts2">
            <div className="footer__title">Контакты</div>
            <ul className="footer__list">
              <li className="footer__li">Айсулуу Мустапакулова</li>
              <li className="footer__li">
                Заведующая отделом инноваций Кыргызпатента
              </li>
              <li className="footer__li">aisuluu.mustapakulova@patent.kg</li>
              <li className="footer__li">+996 557 452 240</li>
            </ul>
          </div>
          <div className="footer__participation">
            <div className="footer__title">Участие</div>
            <ul className="footer__list">
              <li className="footer__li">Билеты</li>
              <li className="footer__li">Партнерам</li>
              <li className="footer__li">Стартаперам</li>
              <li className="footer__li">Программа</li>
              <li className="footer__li">Аккредитация СМИ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
