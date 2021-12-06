import React from "react";
import { Link } from "react-router-dom";

const Equipment = () => {
    return (
        <>
            <div className="col-xs-12">
                <div className="editor-container">
                    <div className="editor-container__header editor-container__header--h3">
                        Элеваторное оборудование
                    </div>
                    <div className="equipment-photo-container">
                        <Link to="/catalog">
                            <div className="equipment-photo-container__item">
                                <div className="equipment-photo-container__title">
                                    Автомобилеразгрузчики
                                </div>
                                <img
                                    src="../../img/equipment/1.jpg"
                                    alt="Автомобилеразгрузчики"
                                />
                            </div>
                        </Link>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Конвейеры
                            </div>
                            <img
                                src="../../img/equipment/2.jpg"
                                alt="Конвейеры"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Пробоотборники
                            </div>
                            <img
                                src="../../img/equipment/3.jpg"
                                alt="Пробоотборники"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Циклоны
                            </div>
                            <img
                                src="../../img/equipment/4.jpg"
                                alt="Циклоны"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Нории
                            </div>
                            <img src="../../img/equipment/5.jpg" alt="Нории" />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Переработка маслосемян
                            </div>
                            <img
                                src="../../img/equipment/6.jpg"
                                alt="Переработка маслосемян"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Клапаны
                            </div>
                            <img
                                src="../../img/equipment/7.jpg"
                                alt="Клапаны"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Задвижки реечные
                            </div>
                            <img
                                src="../../img/equipment/8.jpg"
                                alt="Задвижки реечные"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Тележка сбрасывающая
                            </div>
                            <img
                                src="../../img/equipment/9.jpg"
                                alt="Тележка сбрасывающая"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Шлюзовый затвор
                            </div>
                            <img
                                src="../../img/equipment/10.jpg"
                                alt="Шлюзовый затвор"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Затвор огнепреграждающий
                            </div>
                            <img
                                src="../../img/equipment/11.jpg"
                                alt="Затвор огнепреграждающий"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Устройство загрузки вагонов
                            </div>
                            <img
                                src="../../img/equipment/12.jpg"
                                alt="Устройство загрузки вагонов"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12">
                <div className="editor-container">
                    <div className="editor-container__header editor-container__header--h3">
                        Другое оборудование
                    </div>

                    <div className="equipment-photo-container">
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Котлы
                            </div>
                            <img
                                src="../../img/equipment/other-equipment-1.jpg"
                                alt="Котлы"
                            />
                        </div>
                        <div className="equipment-photo-container__item">
                            <div className="equipment-photo-container__title">
                                Дополнительное оборудование
                            </div>
                            <img
                                src="../../img/equipment/other-equipment-2.jpg"
                                alt="Дополнительное оборудование"
                            />
                        </div>
                        <div className="equipment-photo-container__text">
                            <div style={{ marginBottom: "20px" }}>
                                Продукция АО "Элеватормельмаш" используется на
                                предприятиях Юга ,Поволжья и Центральной России,
                                а так же Украины, Казахстана, Молдовы и
                                Белоруссии. Большое количество успешных
                                партнерских отношений подтверждает качество
                                продукции и предоставляемых услуг по установке
                                оборудования и его обслуживанию.
                            </div>
                            <div>
                                В 2013 году была проведена крупная модернизация
                                оборудования. Введены в эксплуатацию: станок
                                гидроабразивной резки, четырехволковая машина с
                                ЧПУ и листогибочный станок с ЧПУ.Это сразу
                                позволило на порядок поднять качество
                                выпускаемой продукции , снизить трудоемкость
                                процессов, а так же увеличить ассортимент
                                выпускаемой продукции.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipment;
