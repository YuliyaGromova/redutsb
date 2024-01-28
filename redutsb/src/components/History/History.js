import React from "react";

import Right from "../../images/right.png";

function History() {
    return(
        <section className="history">
            <ul className="history__links">
                <li className="history__link">
                    <button className="history__product">Вы недавно смотрели</button>
                    <div className="history__count">100</div>
                    {/* счетчик просмотренного */}
                </li>
                <li className="history__link">
                    <div className="history__question">Не нашли что искали?</div>
                    <button className="history__submit">Отправить заявку<img className="history__right" src={Right} alt="отправить"/></button>
                </li>
            </ul>
        </section>
    )
}

export default History;