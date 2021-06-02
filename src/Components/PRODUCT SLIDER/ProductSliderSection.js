import React from 'react';
import Divider from './Divider.js';
import Productslider from './productslider.js';

function ProductSliderSection(){
    return(
        <div>
            <Productslider/>
            <Divider/>
            <Productslider/>
            <Divider/>
            <Productslider/>
            <Divider/>
            <Productslider/>
        </div>
    )
}

export default ProductSliderSection;