import React, { useEffect } from "react";
import Product from "../Product/Product";

// import Steps from "../../utils/Steps";

function ProductList(props) {
 
const list = props.price;


  useEffect (() => {
    
  },[])
  

  const productList = list.map((item, i) => (
    <Product product={item} key={item.id}></Product>
  ));

  return (
      <ul className="product-list">
        {productList}
      </ul>
  );
}

export default ProductList;