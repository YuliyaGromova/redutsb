import React from "react";
import Phone from "../../images/icons/phone.png";
import Mail from "../../images/icons/mail.png";

function FormSubmit(props) {
    const nameClass = "form-submit form-submit_" + props.place;
    const nameClassTitle = "form-submit__title form-submit__title_" + props.kind;
    const send = (props.kind === "send");
    const question = (props.kind === "question");
    return(
        <form className={nameClass}>
            <h2 className={nameClassTitle}>{props.title || "Оставить заявку"}</h2>
            {send && <input className="form-submit__input" type="name"
            placeholder="Ваше имя*"
            id="name"
            name="name"></input>}
            {send && <input className="form-submit__input" type="email"
            placeholder="Email*"
            id="email"
            name="email"></input>}
            {send && <input className="form-submit__input" type="tele"
            placeholder="Номер телефона*"
            id="tele"
            name="tele"></input>}
            {question && <h3 className="form-submit__name-contact">Дюков Сергей</h3>}
            {question && <ul className="form-submit__contacts">
                  <li className="form-submit__contact">
                    <img className="form-submit__icon" src={Phone} alt="контакт"></img>
                    <p className="form-submit__text">+7(495)120-56-65, доб.116</p>
                  </li>
                  <li className="form-submit__contact">
                  <img className="form-submit__icon" src={Mail} alt="контакт"></img>
                  <p className="form-submit__text">montag@redutsb.ru</p>
                  </li>
                </ul>}
                
            <button className="form-submit__btn" type="submit"
          name="saveUser">{props.nameButton || "Отправить"}</button>
        </form>
    )
}

export default FormSubmit;