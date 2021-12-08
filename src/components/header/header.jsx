import React, { useState } from "react";
import "./header.scss";
import Modal from "../modal/modal";

const Header = () => {
    const [modal, setModal] = useState(false);
    const menuModal = (isModal) => {
        return (
            <ul className="menu">
                <li
                    className={
                        "menu__item" + (isModal ? " menu__item--modal" : "")
                    }
                >
                    О компании
                </li>
                <li
                    className={
                        "menu__item" + (isModal ? " menu__item--modal" : "")
                    }
                >
                    Вакансии
                </li>
                <li
                    className={
                        "menu__item" + (isModal ? " menu__item--modal" : "")
                    }
                >
                    Новости
                </li>
                <li
                    className={
                        "menu__item" + (isModal ? " menu__item--modal" : "")
                    }
                >
                    Контакты
                </li>
            </ul>
        );
    };

    const menuPhone = (isModal) => {
        return (
            <div
                className={
                    "header-container__phone" +
                    (isModal ? " header-container__phone--modal" : "")
                }
            >
                8 (86138) 6-34-03, 6-34-06
            </div>
        );
    };

    const emailModal = (isModal) => {
        return (
            <div
                className={
                    "header-container__email" +
                    (isModal ? " header-container__email--modal" : "")
                }
            >
                sale@semm.ru
            </div>
        );
    };

    const workTimeModal = (isModal) => {
        return (
            <div
                className={
                    "header-container__work-time" +
                    (isModal ? " header-container__work-time--modal" : "")
                }
            >
                пн-пт 8:00-17:00, перерыв 12:00-13:00, сб-вс: выходной
            </div>
        );
    };

    return (
        <>
            <div className="header-container">
                <div
                    className="header-container__mobile-menu"
                    onClick={() => setModal(true)}
                >
                    <img
                        src="../../../img/main/mobile-menu.png"
                        alt="mobile-menu"
                    />
                </div>
                <div className="header-container__logo">
                    <a href="/">
                        <img src="../../../img/main/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header-container__menu">{menuModal(false)}</div>
                {workTimeModal(false)}
                {emailModal(false)}
                <div className="header-container__language-select">
                    <span className="lang lang--ru">Ru</span>
                    <span className="lang lang--en">En</span>

                    <select className="lang-select">
                        <option value="">Выбрать язык</option>
                        <option value="ru">русский</option>
                        <option value="en">английский</option>
                    </select>
                </div>
                {menuPhone(false)}
            </div>
            <Modal
                isOpened={modal}
                menu={menuModal(true)}
                phone={menuPhone(true)}
                email={emailModal(true)}
                workTime={workTimeModal(true)}
                onModalClose={() => setModal(false)}
            />
        </>
    );
};

export default Header;
