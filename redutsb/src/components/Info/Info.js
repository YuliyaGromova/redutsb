import React from "react";

function Info() {
    return(
        <section className="info">
            <div className="info__logo"></div>
            <form className="info__search">
               <input className="info__text" placeholder="Название, бренд или артикул"></input>
               <button className="info__loupe" type="button"></button>
            </form>
            <div className="info__info">
               <div className="info__contacts">
                <p className="info__label">Звонок по России бесплатный</p>
                <p className="info__contact">8 (800) 500-09-69</p>
            </div>
            <div className="info__contacts">
                <p className="info__label">График работы: <span>ПН-ПТ с 10:00 до 18:00</span></p>
                <p className="info__contact">8 (495) 120-56-65</p>
            </div>
            <div className="info__contacts">
                <p className="info__label">Email</p>
                <p className="info__contact">sale@redutsb.ru</p>
            </div>
            <div className="info__icons">
                <button className="info__button slider"></button>
                <button className="info__button heart"></button>
                <button className="info__button bag"></button>
                {/* сделать счетчик товаров в корзине */}
                <div className=""><p className="info__label">Корзина</p>
                <p className="info__contact">0 &#8381;</p> 
                {/* нужна переменная для суммы */}</div>
            </div> 
            </div>
        </section>
    );
}

export default Info;