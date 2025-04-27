import React from "react";
import "./MediaPartners.scss";
import logo1 from "../../assets/HomePageImg/logo1.png";

const MediaPartners = () => {
  const rows = [
    [logo1, logo1, logo1, logo1],
    [logo1, logo1, logo1, logo1],
    [logo1, logo1],
  ];

  return (
    <div className="media-partners">
      <div className="media-partners__container">
        <div className="media-partners__title">МЕДИАПАРТНЕРЫ</div>

        {rows.map((row, rowIndex) => (
          <div
            className={`media-partners__row ${
              row.length === 2 ? "media-partners__row--center" : ""
            }`}
            key={rowIndex}
          >
            {row.map((logo, index) => (
              <div className="media-partners__logo" key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPartners;
