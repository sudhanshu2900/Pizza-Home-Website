import React from 'react';
import { Link } from 'react-router-dom';
import {BsCart3} from "react-icons/bs";
import '../Components/ComponentsStyle.css';


function Header() {
  return (
    <>
      <header>
        <nav>
            <Link to='/'><img src="fast-delivery.png" alt="deliveryBoy" style={{width:'5rem', height:'4rem'}}/></Link>
            <Link to='/menu'><img src='logo.png' alt='logo' /></Link>
            <Link to='/cart'><BsCart3/></Link>
        </nav>
      </header>
    </>
  )
}

export default Header