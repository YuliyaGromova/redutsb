import React from "react";

import Pages from "../Pages/Pages";
import Banner from "../Banner/Banner";
import Description from "../Description/Description";
import Calculator from "../Calculator/Calculator";
import Solutions from "../Solutions/Solutions";
import Scheme from "../Scheme/Scheme";
import Services from "../Services/Services";
import Splurge from "../Splurge/Splurge";
import Experience from "../Experience/Experience";
import Plan from "../Plan/Plan";

function Main() {
    return(
        <section className="main">
            <Pages></Pages>
            <Banner></Banner>
            <Description></Description>
            <Calculator></Calculator>
            <Solutions></Solutions>
            <Scheme></Scheme>
            <Services></Services>
            <Splurge></Splurge>
            <Experience></Experience>
            <Plan></Plan>
        </section>
    )
}

export default Main;