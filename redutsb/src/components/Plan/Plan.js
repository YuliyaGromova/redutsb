import React from "react";
import Result from "../../images/result.png" ;
import Truck from "../../images/icons/truck2.png";
import Calc from "../../images/icons/calc.png";
import Shopping from "../../images/icons/shopping.png";
import Arrow from "../../images/arrowbig.png";

function Plan() {
    return (
        <section className="plan">
            <div className="plan__stages">
                <h3 className="plan__title">3 шага к Вашей системе видеонаблюдения</h3>
                <ul className="plan__steps">
                    <li className="plan__step">
                        <h4 className="plan__subtitle">Шаг 1</h4>
                        <img className="plan__icon" src={Shopping} alt="иконка"></img>
                        <p className="plan__text">Оформление заявки</p>
                    </li>
                    <li className="plan__arrows">
                        <img className="plan__arrow" src={Arrow} alt="стрела"></img>
                    </li>
                    <li className="plan__step">
                        <h4 className="plan__subtitle">Шаг 2</h4>
                        <img className="plan__icon" src={Calc} alt="иконка"/>
                        <p className="plan__text">Предварительный расчет</p>
                    </li>
                    <li className="plan__arrows">
                        <img className="plan__arrow" src={Arrow} alt="стрела"></img>
                    </li>
                    <li className="plan__step">
                        <h4 className="plan__subtitle">Шаг 3</h4>
                        <img className="plan__icon" src={Truck} alt="иконка"/>
                        <p className="plan__text">Вызов специалиста</p>
                    </li>
                </ul>
            </div>
            <img className="plan__result" src={Result} alt="результат"></img>
        </section>
    )
}

export default Plan;