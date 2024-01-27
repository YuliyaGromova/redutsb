import React from "react"; 
import Down from "../../images/down.png";

function NavTab() {
    return(
        <section className="nav-tab">
            <button className="nav-tab__button-catalog">Каталог товаров</button>
            <ul className="nav-tab__lists">
              <li className="nav-tab__list"><button className="nav-tab__button">О компании <img className="nav-tab__button-down" src={Down} alt="открыть"/></button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Наши клиенты</button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Доставка</button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Оплата</button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Гарантия</button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Партнеркая программа <img className="nav-tab__button-down" src={Down} alt="открыть"/></button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Монтаж</button></li>
              <li className="nav-tab__list"><button className="nav-tab__button">Контакты</button></li>
            </ul>
        </section>
    );
}

export default NavTab;