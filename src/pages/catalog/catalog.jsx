import React from "react";
import "./catalog.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Form from "../../components/form";
import { Link } from "react-router-dom";

const Сatalog = () => {
    return (
        <>
            <Header />
            <div className="catalog-container">
                <div className="catalog-container__header">
                    Автомобилеразгрузчики
                </div>
                <div className="catalog-box">
                    <div className="catalog-box__item">
                        <div className="catalog-box__img">
                            <img
                                src="../../img/catalog/product-1.jpg"
                                alt="Автомобилеразгрузчик механический боковой
                                У10-РМБ"
                            />
                        </div>
                        <div className="catalog-box__content">
                            <div className="catalog-box__title">
                                Автомобилеразгрузчик механический боковой
                                У10-РМБ
                            </div>
                            <div className="catalog-box__text">
                                Разгрузчик автомобилей механический боковой РМБ,
                                предназначен для разгрузки зерновых культур,
                                зернопродуктов и других сыпучих материалов через
                                открытый боковой борт автомобилей и автопоездов.
                            </div>
                            <div className="catalog-box__btn">Подробнее</div>
                        </div>
                    </div>

                    <div className="catalog-box__item">
                        <div className="catalog-box__img">
                            <img
                                src="../../img/catalog/product-2.jpg"
                                alt="Автомобилеразгрузчик механический боковой
                                У10-РМБ"
                            />
                        </div>
                        <Link to="/product">
                            <div className="catalog-box__content">
                                <div className="catalog-box__title">
                                    Автомобилеразгрузчик У15-УРАГ
                                </div>
                                <div className="catalog-box__text">
                                    Разгрузчик автомобилей У15-УРАГ предназначен
                                    для разгрузки зерна через открытый задний
                                    борт из одиночных автомобилей и седельных
                                    тягачей с полуприцепами и разгрузки через
                                    открытый боковой борт одиночных автомобилей
                                    и прицепов без расцепки прицепов с
                                    автомобилями.
                                </div>
                                <div className="catalog-box__btn">
                                    Подробнее
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="catalog-box__item">
                        <div className="catalog-box__img">
                            <img
                                src="../../img/catalog/product-3.jpg"
                                alt="Автомобилеразгрузчик механический боковой
                                У10-РМБ"
                            />
                        </div>
                        <div className="catalog-box__content">
                            <div className="catalog-box__title">
                                Автомобилеразгрузчик гидравлический боковой
                                У10-РГБ
                            </div>
                            <div className="catalog-box__text">
                                Разгрузчики автомобилей гидравлический боковой
                                РГБ предназначены для разгрузки зерновых
                                культур, зернопродуктов и других сыпучих
                                материалов через открытый боковой борт
                                автомобилей и автопоездов.
                            </div>
                            <div className="catalog-box__btn">Подробнее</div>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
            <Footer />
        </>
    );
};

export default Сatalog;
