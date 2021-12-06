import React from "react";
import "./product.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Form from "../../components/form";
import "bootstrap";
import Table from "./modules/table";
import Slider from "../../components/slider/slider";

const Product = () => {
    return (
        <>
            <Header />
            <div className="product-container">
                <div className="product-container__header">
                    Автомобилеразгрузчик У15-УРАГ
                </div>
                <div className="product-container__item">
                    <div className="product-container__photo-container">
                        <Slider />
                    </div>

                    <div className="product-container__content">
                        <div className="product-container__text">
                            <p>
                                Разгрузчик автомобилей У15-УРАГ предназначен для
                                разгрузки зерна через открытый задний борт из
                                одиночных автомобилей и седельных тягачей с
                                полуприцепами и разгрузки через открытый боковой
                                борт одиночных автомобилей и прицепов без
                                расцепки прицепов с автомобилями.
                            </p>
                            <p>
                                Разгрузчик применяется на предприятиях России и
                                СНГ.
                            </p>
                            <p>
                                Разгрузчик автомобилей изготовлен в
                                климатическом исполнении "У" категории 1 по ГОСТ
                                15150 - для работы на открытом воздухе в
                                умеренном климате.
                            </p>
                        </div>
                        <div className="product-container__price">
                            Цена от <span>580 000</span> руб.
                        </div>
                        <div className="product-container__btn">Заказать</div>
                        <div className="product-container__btn product-container__btn--download">
                            Скачать наш каталог
                        </div>
                    </div>
                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="specifications-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#specifications"
                            type="button"
                            role="tab"
                            aria-controls="specifications"
                            aria-selected="false"
                        >
                            Технические характеристики
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="operating-principle-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#operating-principle"
                            type="button"
                            role="tab"
                            aria-controls="operating-principle"
                            aria-selected="false"
                        >
                            Принцип действия
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="advantages-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#advantages"
                            type="button"
                            role="tab"
                            aria-controls="advantages"
                            aria-selected="false"
                        >
                            Преимущества
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="certificates-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#certificates"
                            type="button"
                            role="tab"
                            aria-controls="certificates"
                            aria-selected="false"
                        >
                            Сертификаты
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="video-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#video"
                            type="button"
                            role="tab"
                            aria-controls="video"
                            aria-selected="false"
                        >
                            Видео
                        </button>
                    </li>
                </ul>
                <div
                    className="tab-content tab-content--table"
                    id="myTabContent"
                >
                    <div
                        className="tab-pane fade show active"
                        id="specifications"
                        role="tabpanel"
                        aria-labelledby="specifications-tab"
                    >
                        <Table />

                        <div className="info-container">
                            <div className="info-container__title">
                                Состав изделия и комплект поставки
                            </div>
                            <div className="info-container__specifications">
                                <div>платформа большая - 1 шт,</div>
                                <div>платформа боковая - 1 шт,</div>
                                <div>гидросистема - 1 шт,</div>
                                <div>решетка левая - 1 шт,</div>
                                <div>решетка правая - 1 шт,</div>
                                <div>стойка - 2 шт,</div>
                                <div>система управления -1 шт.</div>
                            </div>
                            <div className="info-container__text">
                                Разгрузчик поставляется заказчику комплектно,
                                разобранным на составные части. Отдельно
                                комплектующие изделия, сборочные единицы и
                                детали упаковываются в дощатые ящики.
                                Металлоконструкции поставляются без упаковки.
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="operating-principle"
                        role="tabpanel"
                        aria-labelledby="operating-principle-tab"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat vel sapiente, officia sit, praesentium molestiae
                        quaerat deserunt porro ullam aut natus explicabo totam
                        voluptate consequuntur, commodi eaque obcaecati. Hic
                        quibusdam numquam expedita harum omnis, minus molestiae
                        placeat alias repellendus nesciunt amet consequatur
                        pariatur officia doloremque animi illum delectus
                        eligendi velit mollitia nihil commodi fugit unde ut
                        saepe! Quo debitis voluptates soluta atque, sit
                        provident tempora ab molestias vitae architecto dolore
                        numquam. Ex commodi odio doloremque cumque distinctio
                        doloribus totam voluptatem nemo praesentium pariatur,
                        omnis id quaerat saepe, voluptates, alias unde ad velit
                        dicta! Corrupti ea accusantium, numquam dolor eius in.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="advantages"
                        role="tabpanel"
                        aria-labelledby="advantages-tab"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat vel sapiente, officia sit, praesentium molestiae
                        quaerat deserunt porro ullam aut natus explicabo totam
                        voluptate consequuntur, commodi eaque obcaecati. Hic
                        quibusdam numquam expedita harum omnis, minus molestiae
                        placeat alias repellendus nesciunt amet consequatur
                        pariatur officia doloremque animi illum delectus
                        eligendi velit mollitia nihil commodi fugit unde ut
                        saepe! Quo debitis voluptates soluta atque, sit
                        provident tempora ab molestias vitae architecto dolore
                        numquam. Ex commodi odio doloremque cumque distinctio
                        doloribus totam voluptatem nemo praesentium pariatur,
                        omnis id quaerat saepe, voluptates, alias unde ad velit
                        dicta! Corrupti ea accusantium, numquam dolor eius in.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="certificates"
                        role="tabpanel"
                        aria-labelledby="certificates-tab"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat vel sapiente, officia sit, praesentium molestiae
                        quaerat deserunt porro ullam aut natus explicabo totam
                        voluptate consequuntur, commodi eaque obcaecati. Hic
                        quibusdam numquam expedita harum omnis, minus molestiae
                        placeat alias repellendus nesciunt amet consequatur
                        pariatur officia doloremque animi illum delectus
                        eligendi velit mollitia nihil commodi fugit unde ut
                        saepe! Quo debitis voluptates soluta atque, sit
                        provident tempora ab molestias vitae architecto dolore
                        numquam. Ex commodi odio doloremque cumque distinctio
                        doloribus totam voluptatem nemo praesentium pariatur,
                        omnis id quaerat saepe, voluptates, alias unde ad velit
                        dicta! Corrupti ea accusantium, numquam dolor eius in.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="video"
                        role="tabpanel"
                        aria-labelledby="video-tab"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat vel sapiente, officia sit, praesentium molestiae
                        quaerat deserunt porro ullam aut natus explicabo totam
                        voluptate consequuntur, commodi eaque obcaecati. Hic
                        quibusdam numquam expedita harum omnis, minus molestiae
                        placeat alias repellendus nesciunt amet consequatur
                        pariatur officia doloremque animi illum delectus
                        eligendi velit mollitia nihil commodi fugit unde ut
                        saepe! Quo debitis voluptates soluta atque, sit
                        provident tempora ab molestias vitae architecto dolore
                        numquam. Ex commodi odio doloremque cumque distinctio
                        doloribus totam voluptatem nemo praesentium pariatur,
                        omnis id quaerat saepe, voluptates, alias unde ad velit
                        dicta! Corrupti ea accusantium, numquam dolor eius in.
                    </div>
                </div>
            </div>
            <Form />
            <Footer />
        </>
    );
};

export default Product;
