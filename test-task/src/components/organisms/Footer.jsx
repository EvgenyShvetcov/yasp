import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__front">
        <div className="footer__front__square"></div>
        <div>Клиентская часть</div>
      </div>
      <div className="footer__back">
        <div className="footer__back__square"></div>
        <div>Серверная часть</div>
      </div>
      <div className="footer__db">
        <div className="footer__db__square"></div>
        <div>База данных</div>
      </div>
    </div>
  );
};
