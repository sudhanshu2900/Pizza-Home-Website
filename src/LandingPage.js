import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './App.css';
import { Link } from 'react-router-dom';

function LandingPage() {

  return (
    <>
        <Header/>

        <div className='broad'>
            <h1>Wanna eat 🍕...</h1>
            <div className="linkBtn">
                <Link to='/menu' style={{fontSize:'4rem', textDecoration:'none', color:'#000', fontWeight:'900', textTransform:'uppercase'}}>Go to Shop</Link>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default LandingPage