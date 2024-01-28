import React from "react";

function Pages() {
  return (
    <ul className="pages">
      <li className="pages__tree">
        <p className="pages__parent">Страница 1</p>
        <button className="pages__down"></button>
        <div className="pages__arrow"></div>
      </li>
      <li className="pages__tree">
        <p className="pages__parent">Страница 1</p>
        <button className="pages__down"></button>
        <div className="pages__arrow"></div>
      </li>
      <li className="pages__tree">
        <p className="pages__child">Страница 1</p>
      </li>
    </ul>
  );
}

export default Pages;
