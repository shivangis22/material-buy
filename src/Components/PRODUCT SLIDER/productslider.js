import React, { Component } from 'react';
import './ProductSlider.css';
import ProductCard from './ProductCard';
// import '../App.css';
// import React,{useRef, useState} from 'react';
import productData from './productdata';
import HorizontalSlider from 'react-horizontal-slider';
import ScrollMenu from 'react-horizontal-scrolling-menu';



function createCard(productData){
    return(
        
            <ProductCard
        key= {productData.id} 
        image= {productData.pro_img}
        name= {productData.pro_name}
        disc= {productData.pro_disc}
        price={productData.pro_price}
        />
        
        
    )

}

// ARRAY TO STORE LIST OF PRODUCT CARDS
const arr= new Array(productData.map(createCard));

  
function Productslider(){

    return(
        <div className="pro_slider">
            <div className="slider_header">
                <span className="slider_heading">
                    Best of Lorem Ipsum
                </span>
                <span className="slider_button">
                    <button className="view_button">View all</button>
                </span>
            </div>
            <div className="product-main-slider slider">            
         {arr}            
            </div>
        </div>
    )
}

export default Productslider;