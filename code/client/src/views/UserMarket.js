import React from "react";
import {Icon, Button, Input} from "react-materialize";

const Market = props => {
    const displayProducts = props.productsData.map((each, i )=>
  <div className="eachProduct">
  <div className="productName">
  <p className="nameText">{each.name}: {each.model}</p>
  </div>
  <a href="#">Product Details</a>
  <div className="productImg">
  
  </div>
  <div className="productPrice"><div className="money"><Icon>attach_money</Icon><p>{each.price}</p></div><Button className="button">Add</Button></div>
  </div>
  )
  console.log(props.productsData)
  return (
    
    <div>
    <p>Products</p>
    </div>
  );
};

export default Market;