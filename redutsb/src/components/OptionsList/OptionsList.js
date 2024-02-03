import React, { useEffect } from "react";
import Option from "../Option/Option";
// import Steps from "../../utils/Steps";

function OptionsList(props) {
  // const stepActive = props.step;
const list = props.options;
  useEffect (() => {
    
  },[])
  // const list = Steps.find(step => step.step === stepActive).options;
  

  const optionList = list.map((item, i) => (
    <Option option={item} key={item.id}></Option>
  ));

  return (
      <ul className="options">
        {optionList}
      </ul>
  );
}

export default OptionsList;
