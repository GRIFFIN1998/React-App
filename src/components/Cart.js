import React from "react";
import CartItem from "./CartItem";
import { Items } from "../constants";
import "../components/Cart.scss"
import CartTotal from "./CartTotal";

export default function Cart(props) {
  return (
    <div className="CartWrapper">
      <h1>Shopping Cart.</h1>
      {Items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))} 
      <div>
        <CartTotal/>
        </div>    
    </div>
  );
}
