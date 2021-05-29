import ProductCard from './ProductCard';
import productData from './productdata';


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
               {productData.map(createCard)}  
            </div>
        </div>
    )
}

export default Productslider;