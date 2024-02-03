import React from "react";
import Step from "../Step/Step";
import Steps from "../../utils/Steps";

function StepsCount (props) {
    const StepActive = props.step;
    const LastStep = Steps.length;

    const StepList = Steps.map((item, i) => (
        <Step step={item.step} key={item.step} active={StepActive} last={LastStep}></Step>
      ));

    return(
        <ul className="calculator__steps">{StepList}</ul>
    )
}

export default StepsCount;