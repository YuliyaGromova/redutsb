import React from "react";
import FormSubmit from "../FormSubmit/FormSubmit";

function Feedback() {
    return(
        <section className="feedback">
            <FormSubmit nameButton="Заказать звонок" kind="call" title="Оставьте контактный телефон, и мы перезвоним в течении 30 минут" place="feedback"></FormSubmit>
            <FormSubmit nameButton="Отправить" kind="send" title="Оставить заявку" place="feedback"></FormSubmit>
            <FormSubmit nameButton="Задать вопрос" kind="question" title="Специалист направления" place="feedback"></FormSubmit>
        </section>
    )
}

export default Feedback;