import React from "react";
import "./modal.scss";
import PropTypes from "prop-types";

const Modal = (props) => {
    return (
        <div className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}>
            <div className="modal__body" onClick={props.onModalClose}>
                <div className="modal__close">
                    <img src="../../../img/main/close.png" alt="close" />
                </div>

                <div className="modal__content">
                    {props.menu ? (
                        <div className="modal__menu">{props.menu}</div>
                    ) : (
                        ""
                    )}
                    {props.phone ? (
                        <div className="modal__phone">{props.phone}</div>
                    ) : (
                        ""
                    )}
                    {props.email ? (
                        <div className="modal__email">{props.email}</div>
                    ) : (
                        ""
                    )}
                    {props.workTime ? (
                        <div className="modal__work-time">{props.workTime}</div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpened: PropTypes.bool,
    isModal: PropTypes.bool,
    onModalClose: PropTypes.func,
    menu: PropTypes.node,
    phone: PropTypes.element,
    email: PropTypes.element,
    workTime: PropTypes.element
};

export default Modal;
