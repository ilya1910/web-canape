import React from "react";

const News = () => {
    return (
        <div className="editor-container">
            <div className="editor-container__header editor-container__header--h3">
                Новости компании
            </div>
            <div className="news-container">
                <div className="news-container__item">
                    <div className="news-container__img">
                        <img
                            src="../../img/news/news-1.jpg"
                            alt="Запасные части для пробоотборника"
                        />
                    </div>
                    <div className="news-container__title">
                        Запасные части для пробоотборника
                    </div>
                    <div className="news-container__date">14.10.2020 </div>
                    <div className="news-container__text">
                        Заводом Элеватормельмаш (ЭММ) изготовлены и подготовлены
                        к отгрузке запасные отборники для пробоотборника типа
                        У1-УПП для Заказчика из Саратовской области.
                    </div>
                </div>

                <div className="news-container__item">
                    <div className="news-container__img">
                        <img
                            src="../../img/news/news-2.jpg"
                            alt="Фузоловушка для расширения производства"
                        />
                    </div>
                    <div className="news-container__title">
                        Фузоловушка для расширения производства
                    </div>
                    <div className="news-container__date">14.10.2020 </div>
                    <div className="news-container__text">
                        Для увеличения объемов выпускаемой продукции и в целях
                        модернизации производства для одного из маслобойных
                        предприятий республики Башкортостан завод
                        Элеватормельмаш изготовил и отгрузил очередную машину
                        типа МФС.
                    </div>
                </div>

                <div className="news-container__item">
                    <div className="news-container__img">
                        <img
                            src="../../img/news/news-3.jpg"
                            alt="Произведена мультимодальная отгрузка котлов"
                        />
                    </div>
                    <div className="news-container__title">
                        Произведена мультимодальная отгрузка котлов
                    </div>
                    <div className="news-container__date">14.10.2020 </div>
                    <div className="news-container__text">
                        Мы произвели и отгрузили очередную партию промышленных
                        котлов. Данная отгрузка была необчной, а мультимодальная
                        (авто-, ж.д. контейнер, морской паром).
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
