import React from "react";

import Info from "../Info/Info";
import NavTab from "../NavTab/NavTab";

function Header() {
    return (
        <section className="header">
            <Info></Info>
            <NavTab></NavTab>
        </section>
    );
}

export default Header;