import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, addToCart }) => {
    // const {product,handleAddToCart}=props; 
    // console.log(props)
    // const { addToCart } = props
    const { name, img, ratings, seller } = product
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
            <button onClick={() => addToCart(product)} className='cart-btn'>Add To Cart   <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;