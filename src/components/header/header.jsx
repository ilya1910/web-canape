import React from "react";
import "./header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-container__logo">
                <a href="/">
                    <img src="../../../img/main/logo.png" alt="logo" />
                </a>
            </div>

            <div className="header-container__menu">
                <ul className="menu">
                    <li className="menu__item">О компании</li>
                    <li className="menu__item">Вакансии</li>
                    <li className="menu__item"> Новости</li>
                    <li className="menu__item">Контакты</li>
                </ul>
            </div>
            <div className="header-container__work-time">
                пн-пт 8:00-17:00, перерыв 12:00-13:00, сб-вс: выходной
            </div>
            <div className="header-container__email">sale@semm.ru</div>
            <div className="header-container__language-select">
                <span className="lang">Ru</span>
                <span className="lang lang--en">En</span>

                <select className="lang-select">
                    <option value="">Выбрать язык</option>
                    <option value="ru">русский</option>
                    <option value="en">английский</option>
                </select>
            </div>
            <div className="header-container__phone">
                8 (86138) 6-34-03, 6-34-06
            </div>
        </div>
    );
};

export default Header;
