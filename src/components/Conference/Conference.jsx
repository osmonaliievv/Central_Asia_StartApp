import React from "react";
import "./Conference.scss";
import cenference from "../../assets/HomePageImg/conferenceImg.png";
import location from "../../assets/HomePageImg/Location.svg";

const Conference = () => {
  return (
    <div className="conference">
      <div className="conference__container">
        <div className="conference__background">
          <div className="conference__paddings">
            <div className="conference__info">
              <div className="conference__title">О конференции</div>
              <div className="conference__desc1">
                CASC - это ваш уникальный шанс заявить о себе как о лидере в IT
                индустрии, подчеркнув свой инновационных бизнес-подход и
                готовность следовать новым тенденциям в предпринимательстве.
              </div>
              <div className="conference__desc2">
                CASC пройдет на новой инновационной технологичной площадке,
                включающей в себя панельные дискуссии с передовыми специалистами
                IT сферы, венчурных инвесторов с портфелями в миллионы долларов,
                представителей государственного сектора, бизнес-структур с
                инновационными подходами, а также гостей из стран Центральной
                Азии и не только.
              </div>
              <div className="conference__location">
                <div className="conference__logo">
                  <img src={location} alt="" />
                </div>
                <div className="conference__name">
                  Технопарк, Бишкек, Кыргызстан
                </div>
              </div>
              <div className="conference__buttons">
                <button className="conference__buttons1">Билеты</button>
                <button className="conference__buttons2">Стартаперам</button>
                <button className="conference__buttons3">Партнерам</button>
              </div>
            </div>
            <div className="conference__image">
              <img src={cenference} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
