import React from "react";
import Line from "../../images/line.png";

function Step(props) {
    const step = props.step;
    const last = (props.step === props.last) ? true: false;
    const active = (props.step === props.active) ? true: false;

    return(
        <li className="calculator__step step">
            <div className={active ? "step__count step__count_active": "step__count"}>{step}</div>
            {!last && <img className="line" src={Line} alt=""></img>}
        </li>
    )
}

export default Step;