import React from 'react';
import logo from '../../images/Logo.svg'
import heroSectionImage from '../../images/img1.jpg'
import './Header.css'
const Header = () => {
    return (

        <div>
            <div className='nav-section'>
                <nav className='nav-bar container'>
                    <img src={logo} alt="" />
                    <div className='nav-items'>
                        <a href="/shop">Shop</a>
                        <a href="/order">Orders</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
            </div>


            {/*hero sectoion area */}
            {/*<div className="hero-section container">
                <div>
                    <p>Safe up to 70% off</p>
                    <h2>New Collection For Fall</h2>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button className='shop-button'>SHOP NOW</button>
                </div>
                <div className='hero-section-right-side'>
                    <img src={heroSectionImage} alt="" />
                </div>
            </div> */}

        </div>


    );
};

export default Header;