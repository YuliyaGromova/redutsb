import React from "react";

import Pages from "../Pages/Pages";
import Banner from "../Banner/Banner";
import Description from "../Description/Description";
import Calculator from "../Calculator/Calculator";
import Solutions from "../Solutions/Solutions";
import Scheme from "../Scheme/Scheme";
import Services from "../Services/Services";

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
        </section>
    )
}

export default Main;