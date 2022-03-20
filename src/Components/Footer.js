import React from 'react';
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";
import '../Components/ComponentsStyle.css';


function Footer() {
  return (
    <>
        <div className="footerBox">
            <footer>
                <div className='allFooterDivs'>
                    <div className="footerLogo">
                        <img src='logo.png' alt='logo'/>
                    </div>
                    <div className="A"></div>
                    <div className="B"></div>
                    <div className="footerSocialMedia">
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsFacebook size={20}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsTwitter size={20}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsGoogle size={20}/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram size={20}/></a>
                    </div>
                </div>
                <div className="footerLastLine">
                    <p>Design with 💖 by 💻</p>
                </div>
            </footer>            
        </div>
    </>
  )
}

export default Footer