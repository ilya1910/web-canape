import React, { useState } from "react";
import "./form.scss";

const Form = () => {
    const [inputValue, setInputValue] = useState();

    const handleChange = () => {
        setInputValue(inputValue);
    };

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
                            value={inputValue}
                            type="text"
                            placeholder="ФИО"
                            onChange={handleChange}
                        ></input>
                        <input
                            name="telefon"
                            value={inputValue}
                            type="tel"
                            placeholder="Телефон*"
                            data-mask="phone"
                            onChange={handleChange}
                        ></input>
                        <input
                            name="e-mail"
                            value={inputValue}
                            type="email"
                            placeholder="E-mail*"
                            onChange={handleChange}
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
