import React from "react";
import "./form.scss";

const Form = () => {
    return (
        <div className="container-fluid">
            <div className="col-xs-12">
                <div className="form-container">
                    <div className="form-container__title">
                        Свяжитесь с нами
                    </div>
                    <div className="form-input-container">
                        <input
                            name="fio"
                            value=""
                            type="text"
                            placeholder="ФИО"
                            defaultValue=""
                        ></input>
                        <input
                            name="telefon"
                            value=""
                            type="tel"
                            placeholder="Телефон*"
                            data-mask="phone"
                            defaultValue=""
                        ></input>
                        <input
                            name="e-mail"
                            value=""
                            type="email"
                            placeholder="E-mail*"
                            defaultValue=""
                        ></input>
                    </div>

                    <textarea
                        name="vash-zapros"
                        placeholder="Ваш запрос"
                    ></textarea>

                    <span className="form-container__text">
                        Нажимая на кнопку вы даете согласие на обработку
                        персональных данных
                    </span>
                    <button type="submit" className="form-container__button">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
