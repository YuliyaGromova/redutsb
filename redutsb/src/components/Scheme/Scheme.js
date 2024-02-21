import React from "react";
import FormSubmit from "../FormSubmit/FormSubmit";

function Scheme() {
    return (
        <section className="scheme">
            <div className="scheme__image"></div>
            <FormSubmit nameButton="Отправить" kind="send" title="Оставить заявку" place="scheme"></FormSubmit>
        </section>
    )
}

export default Scheme;