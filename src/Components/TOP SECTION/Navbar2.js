import React from 'react';
import './top.css';
import cart from './Top Section Images/cart.png';
import offer from './Top Section Images/offer icon.png';
import logo from './Top Section Images/LOGO.png';
import {FaSistrix} from 'react-icons/fa';



function Navbar2(){
    return(
    <div className= "Navbar2">

    {/* LOGO SECTION */}
    <div className= "logo-column">
        <a href="index.html">
            <img src= {logo} alt= "logo" />
        </a>
    </div>

    {/* SEARCH BAR SECTION */}
    <div className="search-column">
        <form className="search" action="#">
            <FaSistrix className="search-icon"></FaSistrix>
            <input type="text" className="search-input" placeholder="Search Products by title, supplier, category, brand etc..." name="search"></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </div>
    
    {/* POST YOU ENQUIRY */}
    <div>
        <a href="#" className="Enquiry">
        Post your enquiry
        </a>
    </div> 

    {/* CART ICON */}
    <div>
        <a href="#">
            <img src={cart} alt="cart-icon" width="35" height="35"/>
        </a>
    </div> 

    {/* OFFER ICON */}
    <div>
        <a href="#">
            <img src={offer} alt="offer-icon" width="35" height="35"/>
        </a>
    </div>

    {/* SIGN UP BUTTON */}
    <div className="signup">
        <button type="submit" className="signup-btn ">Sign Up</button>
    </div>
    
    </div>
    )
    
}

export default Navbar2;