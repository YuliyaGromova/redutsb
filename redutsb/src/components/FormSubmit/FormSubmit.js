import React from "react";

function FormSubmit() {
    return(
        <form className="form-submit">
            <h2 className="form-submit__title">Оставить заявку</h2>
            <input className="form-submit__input" type="name"
            placeholder="Ваше имя*"
            id="name"
            name="name"></input>
            <input className="form-submit__input" type="email"
            placeholder="Email*"
            id="email"
            name="email"></input>
            <input className="form-submit__input" type="tele"
            placeholder="Номер телефона*"
            id="tele"
            name="tele"></input>
            <button className="form-submit__btn" type="submit"
          name="saveUser">Отправить</button>
        </form>
    )
}

export default FormSubmit;