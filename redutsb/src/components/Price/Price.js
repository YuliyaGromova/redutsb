import React from "react";
import ProductList from "../ProductList/ProductList";
import PriceList from "../../utils/PriceList";

function Price () {
    return(
        <section className="price">
            <h2 className="price__title">Услуги</h2>
            <ProductList price={PriceList}></ProductList>
        </section>
    )
}

export default Price;