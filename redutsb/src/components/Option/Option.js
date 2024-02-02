import React from "react";

function Option(props) {
    const option=props.option;

  return (
     <li className="option ">
     {/* option_active option__check_active*/}
      <div className="option__photo" style={{ backgroundImage: `url(${option.image})` }}></div>
      <div className="option__description">
        <div className="option__check "></div>
        <p className="option__option-title">{option.title}</p>
      </div>
    </li>
  );
}

export default Option;
