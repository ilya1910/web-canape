import React from "react";

const Benefits = () => {
    return (
        <>
            <div className="col-xs-12">
                <div className="editor-container">
                    <div className="editor-container__header">
                        Продукция для аграрной промышленности
                    </div>
                    <span className="editor-container__text">
                        АО "Элеватормельмаш" г. Кропоткин на протяжении 75 лет
                        является крупнейшим поставщиком продукции для
                        агропромышленного комплекса России и ближнего зарубежья.
                    </span>
                    <span className="editor-container__text editor-container__text--add-indent">
                        Предприятие выпускает большой спектр оборудования в
                        которые входит: элеваторное оборудование, промышленные
                        котлы, бетоносмесители, металлоконструкции и
                        металлические формы для свай.
                    </span>
                    <span className="editor-container__text">
                        Собственное конструкторское бюро позволяет разрабатывать
                        новую, а так же регулярно улучшать и модернизировать
                        существующую продукцию.
                    </span>
                </div>
            </div>

            <div className="col-xs-12">
                <div className="benefits-container">
                    <div className="benefits-container__item">
                        <span className="benefits-container__num">75</span>
                        <span className="benefits-container__num benefits-container__num--text">
                            лет
                        </span>
                        <div className="benefits-container__text">
                            опыта на рынке агропромышленного комплекса
                        </div>
                    </div>

                    <div className="benefits-container__item">
                        <span className="benefits-container__num benefits-container__num--text"></span>
                        <span className="benefits-container__num">
                            <p>></p>200
                        </span>

                        <div className="benefits-container__text">
                            видов мельнично - элеваторного оборудования
                        </div>
                    </div>

                    <div className="benefits-container__item">
                        <span className="benefits-container__num">25</span>
                        <div className="benefits-container__text">
                            видов котлов промышленного назначения
                        </div>
                    </div>

                    <div className="benefits-container__item">
                        <span className="benefits-container__num">20</span>
                        <div className="benefits-container__text">
                            почвообрабатывающей техники
                        </div>
                    </div>

                    <div className="benefits-container__item">
                        <span className="benefits-container__num">35</span>
                        <div className="benefits-container__text">
                            регионов поставки продукции
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;
