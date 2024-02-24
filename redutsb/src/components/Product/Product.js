import React from "react";

function Product(props) {
  const price = props.product;
  // const Id=price.id;

  return (
    <li className="product">
      
        <h3 className="product__name">{price.product}</h3>
        <div className="product__price">
          <p className="product__price-serv">{price.price}</p>
          <p className="product__currency">{price.currency}</p>
        </div>
        <form className="product__form">
        <div className="product__count">
            <button className="product__minus"></button>
            <input
          className=""
          type="text "
          placeholder="1"
          id={price.id}
          name={price.id}
        >
        </input>
        <button className="product__minus"></button>
        </div>
        
        <button className="product__button"></button>
      </form>
    </li>
  );
}

export default Product;
