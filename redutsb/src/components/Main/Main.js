import React from "react";

import Pages from "../Pages/Pages";
import Banner from "../Banner/Banner";
import Description from "../Description/Description";
import Calculator from "../Calculator/Calculator";

function Main() {
    return(
        <section className="main">
            <Pages></Pages>
            <Banner></Banner>
            <Description></Description>
            <Calculator></Calculator>
        </section>
    )
}

export default Main;