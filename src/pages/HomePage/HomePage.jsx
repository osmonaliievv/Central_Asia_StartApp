import React from "react";
import "./HomePage.scss";
import location from "../../assets/HomePageImg/Location.svg";
import data from "../../assets/HomePageImg/Data.svg";
import descLogo from "../../assets/HomePageImg/DecriptionLogo.svg";
import partnerLogo from "../../assets/HomePageImg/logo1.png";
import partnerLogo1 from "../../assets/HomePageImg/logo2.png";
import Timer from "../../components/Timer/Timer";
import Quality from "../../components/Quality/Quality";
import Speakers from "../../components/Speakers/Speakers";
import Conference from "../../components/Conference/Conference";
import Programs from "../../components/Programs/Programs";
import Price from "../../components/Price/Price";
import MediaPartners from "../../components/MediaPartners/MediaPartners";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__background">
        <div className="homePage__container">
          <div className="homePage__title">
            <div className="homePage__title_item">
              Central Asia <br /> Startup Cup
            </div>
            <div className="homePage__title_buttons">
              <button className="homePage__title_button_buy">Билеты</button>
              <button className="homePage__title_button-startUp">
                Стать спикером
              </button>
            </div>
            <div className="homePage__title_address_time">
              <div className="homePage__title_address">
                <div className="homePage__title_address-logo">
                  <img src={location} alt="" />
                </div>
                <div className="homePage__title_address-name">
                  Бишкек, Технопарк
                </div>
              </div>
              <div className="homePage__title_time">
                <div className="homePage__title_time-logo">
                  <img src={data} alt="" />
                </div>
                <div className="homePage__title_time-data">12:00 - 18:00</div>
              </div>
            </div>
          </div>
          <div className="homePage__description">
            <div className="homePage__description_img">
              <img src={descLogo} alt="" />
            </div>
            <div className="homePage__description_text">
              <p className="homePage__description_text-title1">
                Ключевое событие для экосистемы стартапов, предпринимателей,
                инвесторов и лидеров развития инновационных технологий в
                регионе.
              </p>
              <p className="homePage__description_text-title2">
                Это уникальная площадка, объединяющая лучших специалистов и
                стартап-команды Центральной Азии для обмена опытом, установления
                деловых связей и продвижения инновационных решений, а также
                поиска инвесторов для масштабирования проектов.
              </p>
            </div>
            <Timer />
          </div>
        </div>
      </div>
      <div className="homePage__info">
        <div className="homePage__quality">
          <Quality />
        </div>
        <div className="homePage__speakers">
          <Speakers />
        </div>
        <div className="homePage__conference">
          <Conference />
        </div>
        <div className="homePage__programs">
          <Programs />
        </div>
        <div className="homePage__price">
          <Price />
        </div>
        <div className="homePage__organizers">
          <div className="homePage__organizers-title">ОРГАНИЗАТОРЫ</div>
          <div className="homePage__organizers-logos">
            <div className="homePage__organizers-logo">
              <img src={partnerLogo} alt="" />
            </div>
            <div className="homePage__organizers-logo">
              <img src={partnerLogo1} alt="" />
            </div>
          </div>
        </div>
        <div className="homePage__mediaPartners">
          <MediaPartners />
        </div>
        <div className="homePage__aboutTheEvent">
          <div className="homePage__aboutTheEvent__container">
            <div className="homePage__aboutTheEvent-title">О мероприятии</div>
            <div className="homePage__aboutTheEvent-text">
              <p className="homePage__aboutTheEvent-text-title1">
                Организаторами CASC выступают «Программа Великобритании по
                инклюзивному зелёному развитию в Центральной Азии»,
                софинансируемая правительством Великобритании и фондом Ага Хана,
                Accelerate Prosperity (АР) – инвестиционный и бизнес-акселератор
                №1 в Кыргызстане, Пакистане, Таджикистане и Афганистане, а также
                Государственное агентство интеллектуальной собственности
                инноваций при Кабинете Министров Кыргызской Республики
                (Кыргызпатент)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
