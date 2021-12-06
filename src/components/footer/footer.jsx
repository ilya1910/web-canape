import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <>
            <div className="container-fluid container-fluid--footer">
                <div className="footer-container">
                    <div className="footer-container__logo">
                        <a href="/">
                            <img src="../../../img/main/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="footer-container__sectionlists">
                        <div className="sectionlist">
                            <ul className="sectionlist__links">
                                <li className="sectionlist__item">
                                    О компании
                                </li>
                                <li className="sectionlist__item">
                                    Каталог продукции
                                </li>
                                <li className="sectionlist__item">Услуги</li>
                                <li className="sectionlist__item">Вакансии</li>
                                <li className="sectionlist__item">Новости</li>
                                <li className="sectionlist__item">Контакты</li>
                            </ul>
                        </div>

                        <div className="sectionlist">
                            <ul className="sectionlist__links">
                                <li className="sectionlist__item">
                                    Элеваторное Оборудование
                                </li>
                                <li className="sectionlist__item">Котлы</li>
                                <li className="sectionlist__item">
                                    Металлоконструкции
                                </li>
                                <li className="sectionlist__item">
                                    Запчасти на элеваторное оборудование
                                </li>
                                <li className="sectionlist__item">
                                    Трубы дымовые
                                </li>
                                <li className="sectionlist__item">
                                    Водонапорные башни
                                </li>
                            </ul>
                        </div>

                        <div className="sectionlist">
                            <ul className="sectionlist__links">
                                <li className="sectionlist__item">
                                    Котел-утилизатор
                                </li>
                                <li className="sectionlist__item">
                                    Скреперный транспортёр для уборки навоза
                                </li>
                                <li className="sectionlist__item">
                                    Планетарный бетоносмеситель
                                </li>
                                <li className="sectionlist__item">
                                    Подъемники
                                </li>
                                <li className="sectionlist__item">Тележки</li>
                                <li className="sectionlist__item">Неликвиды</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="contacts-container">
                    <div className="contacts-container__item">
                        <div className="footer-container__icon">
                            <img
                                src="../../../img/footer-icon/icon-1.svg"
                                alt=""
                            />
                        </div>
                        <div className="footer-container__text">
                            Адрес: 352382, Краснодарский край, г. Кропоткин, ул.
                            Пушкина, 79
                        </div>
                    </div>

                    <div className="contacts-container__item">
                        <div className="footer-container__icon">
                            <img
                                src="../../../img/footer-icon/icon-2.svg"
                                alt=""
                            />
                        </div>
                        <div className="footer-container__text">
                            Тел./Факс: 8(86138) 6-34-03, 6-34-06 E-mail:
                            sale@semm.ru
                        </div>
                    </div>

                    <div className="contacts-container__item">
                        <div className="footer-container__icon">
                            <img
                                src="../../../img/footer-icon/icon-3.svg"
                                alt=""
                            />
                        </div>
                        <div className="footer-container__text">
                            Режим работы: пн-пт 8:00-17:00, перерыв 12:00-13:00,
                            сб-вс: выходной
                        </div>
                    </div>
                </div>

                <div className="footer-info">
                    <div className="footer-info__item">
                        © АО "Элеватормельмаш" 2014 г.
                    </div>
                    <div className="footer-info__item">
                        Разработка и маркетинг - WebCanape
                    </div>
                    <div className="footer-info__item">
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
