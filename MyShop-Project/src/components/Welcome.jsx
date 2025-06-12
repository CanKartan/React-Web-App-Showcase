import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './WelcomeProduct';
import { useSelector } from 'react-redux'
import '../css/Welcome.css'
import { FaShopify } from "react-icons/fa";


function Welcome() {
    const products = useSelector((store) => store.product.products)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className='welcome-container'>
            <h1>Welcome To My Shop</h1>
            <span className='welcome-circle'><FaShopify /></span>
            <div className="slider-container">
                <Slider {...settings}>
                    {products && products.map((product) => (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Welcome
