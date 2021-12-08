import React from "react";
import "./main.scss";
import Benefits from "./modules/benefits";
import Equipment from "./modules/equipment";
import Service from "./modules/service";
import News from "./modules/news";
import Form from "../../components/form/form";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Main = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="col-xs-12">
                    <div className="slider-container">
                        <div className="slider-container__navbar">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div style={{ display: "none" }}>123</div>
                            </nav>
                        </div>
                        <div className="slider-container__header">
                            Элеватормельмаш
                        </div>
                        <div className="slider-container__description">
                            Крупнейший поставщик продукции для агропромышленного
                            комплекса России и ближнего зарубежья
                        </div>
                    </div>

                    <div className="custom-container">
                        <div className="row">
                            <Benefits />
                            <Equipment />
                            <Service />
                            <News />
                        </div>
                    </div>
                    <Form />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;
