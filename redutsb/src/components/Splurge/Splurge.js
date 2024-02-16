import React from "react";
import Users from "../../images/icons/users.png";
import Truck from "../../images/icons/truck.png";
import Handshake from "../../images/icons/handshake.png";
import Wrench from "../../images/icons/wrench.png";
import Notebook from "../../images/icons/notebook.png";
import Note from "../../images/icons/note.png";
import MapPin from "../../images/icons/mappin.png";
import Timer from "../../images/icons/timer.png";

function Splurge() {
  return (
    <section className="splurge">
      <h2 className="splurge__title">Почему стоит работать именно с нами</h2>
      <ul className="splurge__lists">
        <li className="splurge__list">
          <img className="splurge__icon" src={Users} alt="иконка"></img>
          <p className="splurge__text">
            Индивидуальный подход Монтаж видеонаблюдения в любой день, включая
            выходные
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Truck} alt="иконка"></img>
          <p className="splurge__text">
            Бесплатный выезд специалиста для замера и консультации. Демонстрация
            возможностей оборудования по приезду на объект
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Handshake} alt="иконка"></img>
          <p className="splurge__text">
            Гарантия на оборудование и все виды работ
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Wrench} alt="иконка"></img>
          <p className="splurge__text">
            Мы работаем современными, профессиональными инструментами
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Notebook} alt="иконка"></img>
          <p className="splurge__text">
            Построение оптимальной по стоимости и возможностям системы
            безопасности
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Note} alt="иконка"></img>
          <p className="splurge__text">
            Весь комплекс услуг от одного исполнителя
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={MapPin} alt="иконка"></img>
          <p className="splurge__text">
            Подбор и доставка материалов на объект
          </p>
        </li>
        <li className="splurge__list">
          <img className="splurge__icon" src={Timer} alt="иконка"></img>
          <p className="splurge__text">Строгое соблюдение сроков работ</p>
        </li>
      </ul>
    </section>
  );
}

export default Splurge;
