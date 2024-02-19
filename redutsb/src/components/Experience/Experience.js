import React from "react";
import Star from "../../images/star.png"

function Experience() {
    return(
        <section className="experience">
            <img className="experience__star" src={Star} alt="звезда"></img>
            <h2 className="experience__title">Наш опыт: 11 лет работы и более 2000 выполненных проектов</h2>
        </section>
    )
}

export default Experience;