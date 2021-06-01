import ProductCard from './ProductCard';
import React,{useRef, useState} from 'react';
import productData from './productdata';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  SwiperCore.use([Pagination,Navigation]);


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
            <div className="slider">
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
            "clickable": true
           }} navigation={true} className="mySwiper">
             <SwiperSlide> {productData.map(createCard)}   
             </SwiperSlide>
             </Swiper>
            
            
            
            </div>
        </div>
    )
}

export default Productslider;