import React from "react";

import Info from "../Info/Info";
import NavTab from "../NavTab/NavTab";
import History from "../History/History";

function Header() {
    return (
        <section className="header">
            <Info></Info>
            <NavTab></NavTab>
            <History></History>
        </section>
    );
}

export default Header;