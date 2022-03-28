import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { name, img, ratings, seller } = props.product
    return (
        <div>
            <div className='product-container'>
                <div>
                    <img src={img} alt="" />
                    <p>Name:{name} </p>
                    <p>Seller: {seller}</p>
                    <p>Ratings:{ratings}</p>


                </div>

            </div>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;