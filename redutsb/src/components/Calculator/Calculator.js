import React from "react";

import OptionsList from "../OptionsList/OptionsList";
import Steps from "../../utils/Steps";
// import StepOne from "../../utils/StepOne";
import StepsCount from "../StepsCount/StepsCount";

function Calculator() {
  const [step, setStep] = React.useState(1);
  const optionList = Steps.find(item => item.step === step).options;

  React.useEffect(() => {
    setStep(1);
  }, []);

  function changeStep () {
    if (step === (Steps.length)) {
      setStep(step)
    } else {
        setStep(step + 1);
    }
  }

//   React.useEffect(() => {
     
//   }, [step])

  return (
    <section className="calculator">
      <h2 className="calculator__title">Онлайн калькулятор видеонаблюдения</h2>
      <div className="calculator__content">
        <h3 className="calculator__subtitle">
          Для какого объекта нужно видеонаблюдение?
        </h3>
        <StepsCount step={step}></StepsCount>
        <div className="calculator__options">
          <OptionsList options={optionList}></OptionsList>
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
        <div className="calculator__next-step"><button className="next-step" onClick={changeStep}>Далее</button></div>
      </div>
    </section>
  );
}

export default Calculator;
