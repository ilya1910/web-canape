import React from "react";

const Service = () => {
    return (
        <div className="editor-container">
            <div className="editor-container__header editor-container__header--h3">
                Услуги компании
            </div>
            <div className="service-container">
                <div className="service-container__item">
                    <div className="service-container__img">
                        <img
                            src="../../img/service-img/service-1.jpg"
                            alt="Плазменная резка"
                        />
                    </div>
                    <div className="service-container__title">
                        Плазменная резка
                    </div>
                    <div className="service-container__text">
                        Компания АО «Элеватормельмаш» осуществляет литейное
                        производство черных и цветных металлов на
                        профессиональной основе и производит литые детали из
                        чугуна и цветных сплавов по эскизу заказчика.
                    </div>
                </div>

                <div className="service-container__item">
                    <div className="service-container__img">
                        <img
                            src="../../img/service-img/service-2.jpg"
                            alt="Гидроабразивная резка"
                        />
                    </div>
                    <div className="service-container__title">
                        Гидроабразивная резка
                    </div>
                    <div className="service-container__text">
                        Уникальная технология, которая может производить резку
                        различных материалов, в том числе стекла, пластика,
                        металла и многих других.
                    </div>
                </div>

                <div className="service-container__item">
                    <div className="service-container__img">
                        <img
                            src="../../img/service-img/service-3.jpg"
                            alt="Изготовление изделий на листогибочном станке с ЧПУ"
                        />
                    </div>
                    <div className="service-container__title">
                        Изготовление изделий на листогибочном станке с ЧПУ
                    </div>
                    <div className="service-container__text">
                        Позволяет изготавливать сложные профили, элементов
                        кровли, оконные отливы и т.д. Такой станок незаменим при
                        любых гибочных работах.
                    </div>
                </div>

                <div className="service-container__item">
                    <div className="service-container__img">
                        <img
                            src="../../img/service-img/service-4.jpg"
                            alt="Производство металлоконструкций"
                        />
                    </div>
                    <div className="service-container__title">
                        Производство металлоконструкций
                    </div>
                    <div className="service-container__text">
                        Металлоконструкции изготавливаются по индивидуальным
                        параметрам с учетом всех пожеланий заказчика
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
