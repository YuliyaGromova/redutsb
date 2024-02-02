import React from "react";
import Line from "../../images/line.png";

import OptionsList from "../OptionsList/OptionsList";
import StepOne from "../../utils/StepOne";

function Calculator() {
  return (
    <section className="calculator">
      <h2 className="calculator__title">Онлайн калькулятор видеонаблюдения</h2>
      <div className="calculator__content">
        <h3 className="calculator__subtitle">
          Для какого объекта нужно видеонаблюдение?
        </h3>
        <ul className="calculator__steps">
          <li className="calculator__step step">
            <div className="step__count">1</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count step__count_active">2</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">3</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">4</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">5</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">6</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">7</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">8</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">9</div>
            <img className="line" src={Line} alt=""></img>
          </li>
          <li className="calculator__step step">
            <div className="step__count">10</div>
          </li>
        </ul>
        <div className="calculator__options">
          <OptionsList step={StepOne}></OptionsList>
          <div className="calculator__clue clue">
            <div className="clue__arrow"></div>
            <div className="clue__text">
              <p className="clue__info">
                Торговый дом ООО "ТД Редут СБ" осуществляет профессиональный
                монтаж видеонаблюдения на объектах любой сложности на протяжении
                9 лет. В работе мы придерживаемся принципа: всегда слышать
                клиента и удовлетворять его потребности.
              </p>
              <div className="clue__author">
                <p className="clue__name">Дюков Сергей</p>
                <p className="clue__author-work">Специалист направления</p>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator__next-step"><button className="next-step">Далее</button></div>
      </div>
    </section>
  );
}

export default Calculator;
