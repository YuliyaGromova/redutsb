import React from "react";
import Option from "../Option/Option";

function OptionsList(props) {
  const list = props.step;

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
