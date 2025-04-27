import React from "react";
import "./Speakers.scss";
import avatarca from "../../assets/HomePageImg/ava.avif";

const Speakers = () => {
  return (
    <div className="speakers">
      <div className="speakers__container">
        <div className="speakers__title">СПИКЕРЫ</div>
        <div className="speakers__subtitle">
          <div className="speakers__cards">
            <div className="speakers__cards-img">
              <img src={avatarca} alt="avatarca" />
            </div>
            <div className="speakers__cards-name">Иванов Иван</div>
            <div className="speakers__cards-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ducimus quasi quod impedit voluptatibus alias doloremque
              temporibus, asperiores eum autem!
            </div>
          </div>
          <div className="speakers__cards">
            <div className="speakers__cards-img">
              <img src={avatarca} alt="avatarca" />
            </div>
            <div className="speakers__cards-name">Иванов Иван</div>
            <div className="speakers__cards-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ducimus quasi quod impedit voluptatibus alias doloremque
              temporibus, asperiores eum autem!
            </div>
          </div>
          <div className="speakers__cards">
            <div className="speakers__cards-img">
              <img src={avatarca} alt="avatarca" />
            </div>
            <div className="speakers__cards-name">Иванов Иван</div>
            <div className="speakers__cards-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ducimus quasi quod impedit voluptatibus alias doloremque
              temporibus, asperiores eum autem!
            </div>
          </div>
          <div className="speakers__cards">
            <div className="speakers__cards-img">
              <img src={avatarca} alt="avatarca" />
            </div>
            <div className="speakers__cards-name">Иванов Иван</div>
            <div className="speakers__cards-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ducimus quasi quod impedit voluptatibus alias doloremque
              temporibus, asperiores eum autem!
            </div>
          </div>
        </div>

        <div className="speakers__button">
          <button className="speakers__button-item">Все спикеры</button>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
