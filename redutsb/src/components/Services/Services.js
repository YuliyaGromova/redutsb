import React from "react";

function Services() {
  return (
    <section className="services">
      <div className="serv">
        <h2 className="serv__title">
          Предлагаем полный спектр услуг по установке систем видеонаблюдения
        </h2>
        <ul className="serv__lists">
          <li className="serv_list">
            <div className="serv__num">1</div>
            <p className="serv__text">
              Бесплатная консультация и замер с выездом специалиста на объект
              или по телефону
            </p>
          </li>
          <li className="serv_list">
            <div className="serv__num">2</div>
            <p className="serv__text">
            Составление технического 
задания, проектирование 
и составление сметы
            </p>
          </li>
          <li className="serv_list">
            <div className="serv__num">3</div>
            <p className="serv__text">
            Монтаж внутренних 
и внешних видеокамер 
и вспомогательных элементов
            </p>
          </li>
          <li className="serv_list">
            <div className="serv__num">4</div>
            <p className="serv__text">
            Настройка программного 
обеспечения, тестирование 
и пуско-наладочные работы
            </p>
          </li>
          <li className="serv_list">
            <div className="serv__num">5</div>
            <p className="serv__text">
            Аудит объекта бесплатно
            </p>
          </li>
          <li className="serv_list">
            <div className="serv__num">6</div>
            <p className="serv__text">
            Ремонт, модернизация 
и постпродажное обслуживание
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
