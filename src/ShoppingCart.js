import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { BsTrash, BsPatchPlus, BsPatchMinus, BsArrowLeftCircle } from "react-icons/bs";
import Footer from './Components/Footer';
import Header from './Components/Header';
import "./Components/ComponentsStyle.css"


function ShoppingCart() {

  const cart = useSelector((state)=>state);
  const dispatch = useDispatch();

  //Total price of cart
  const addition = (value, currentValue) => {
    return value += currentValue.price*currentValue.quantity
  }
  const totalPrice = cart.reduce(addition, 0);

  
  //Shopping cart card from which data is displayed over here 
  const a = cart.map((data, index) => {
    return(
      <div className="cartCardBody">
        <div className="cartItemImage">
          <img src={data.img_url} alt="pizza" />
        </div>
        
        <div className="cartItemName">
          <h3>{data.name}</h3>
        </div>
        
        <div className="cartItemPrice">
          <h3>₹ {data.price}</h3>
        </div>
        
        <div className="cartItemQuantity">
          <button onClick={()=>{
            if(data.quantity > 1){ dispatch({type:'DECREASE', payload:data});}
            else{ dispatch({type:'REMOVE', payload:data})}
          }}><BsPatchMinus/></button>
          <p>{data.quantity}</p>
          <button onClick={()=>dispatch({type:'INCREASE', payload:data})}><BsPatchPlus/></button>
        </div>
        
        <div className="cartItemRemove" onClick={()=>{dispatch({type:"REMOVE", payload: data})}}>
          <BsTrash/>
        </div>
      </div>
    )
  })
   
  

  return (
    <>
        <Header/>

        <div className="CartBody">
            <Link to='/menu'><BsArrowLeftCircle size={25}/></Link>
            <h1>Shopping Cart</h1>
            <hr/>

            {a}

            <div className="totalPrice">
              <p style={{fontSize:'1.5rem'}}>Total</p>
              <p>₹ {totalPrice}</p>
            </div>           
        </div>

        <Footer/>
    </>
  )
}

export default ShoppingCart