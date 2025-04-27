import { useState } from "react";
import "./Programs.scss";
import icon from "../../assets/HomePageImg/Img2.png";

function Programs() {
  const [activeSet, setActiveSet] = useState(1);

  const firstCards = [
    {
      title: "Карточка 1",
      time: "11:00-13:00",
      logo: icon,
      list: ["Тема 1", "Тема 2", "Тема 3"],
    },
    {
      title: "Карточка 2",
      time: "11:00-13:00",
      logo: icon,
      list: ["Пункт А", "Пункт B", "Пункт C"],
    },
    {
      title: "Карточка 3",
      time: "11:00-13:00",
      logo: icon,
      list: ["Модуль 1", "Модуль 2", "Модуль 3"],
    },
  ];

  const secondCards = [
    {
      title: "Карточка 4",
      time: "11:00-13:00",
      logo: icon,
      list: ["Блок 1", "Блок 2", "Блок 3"],
    },
    {
      title: "Карточка 5",
      time: "11:00-13:00",
      logo: icon,
      list: ["Этап A", "Этап B", "Этап C"],
    },
    {
      title: "Карточка 6",
      time: "11:00-13:00",
      logo: icon,
      list: ["Часть I", "Часть II", "Часть III"],
    },
  ];

  const cardsToShow = activeSet === 1 ? firstCards : secondCards;

  return (
    <div className="programs">
      <div className="programs__container">
        <h2 className="programs__title">ПРОГРАММА CASC</h2>

        <div className="programs__buttons">
          <button
            onClick={() => setActiveSet(1)}
            className={activeSet === 1 ? "active" : ""}
          >
            Первая группа
          </button>
          <button
            onClick={() => setActiveSet(2)}
            className={activeSet === 2 ? "active" : ""}
          >
            Вторая группа
          </button>
        </div>

        <div className="programs__cards">
          {cardsToShow.map((card, index) => (
            <div key={index} className="programs__card">
              <div className="programs__card-top">
                <img
                  src={card.logo}
                  alt="Иконка"
                  className="programs__card-logo"
                />
                <span className="programs__card-time">{card.time}</span>
              </div>
              <h3 className="programs__card-title">{card.title}</h3>
              <ul className="programs__card-list">
                {card.list.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="programs__button_all">
          <button className="programs__button_all-btn">Показать все</button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
