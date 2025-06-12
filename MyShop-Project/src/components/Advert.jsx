import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import advert from "../assets/advert.png"
import advert2 from "../assets/advert2.png"
import advert3 from "../assets/advert3.png"
import advert4 from "../assets/advert4.png"
import shoes from "../assets/shoes.png"
import tisort from "../assets/tisort.png"
import "../css/Advert.css"

function Advert() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className='advert-card-container'>
            <div className='advert-header'>
                <h3>Discover the Best Deals Today!</h3>
            </div>
            <Slider {...settings}>
                <div className='advert-card'>
                    <img src={advert} alt="advert" />
                </div>
                <div className='advert-card'>
                    <img src={advert2} alt="advert2" />
                </div>
                <div className='advert-card'>
                    <img src={advert3} alt="advert3" />
                </div>
                <div className='advert-card'>
                    <img src={advert4} alt="advert4" />
                </div>
                <div className='advert-card'>
                    <img src={shoes} alt="shoes" />
                </div>
                <div className='advert-card'>
                    <img src={tisort} alt="tisort" />
                </div>
                <div className='advert-card'>
                    <img src={tisort} alt="tisort" />
                </div>
                <div className='advert-card'>
                    <img src={advert} alt="advert" />
                </div>
                <div className='advert-card'>
                    <img src={advert2} alt="advert2" />
                </div>
                <div className='advert-card'>
                    <img src={advert3} alt="advert3" />
                </div>
                <div className='advert-card'>
                    <img src={advert4} alt="advert4" />
                </div>
                <div className='advert-card'>
                    <img src={shoes} alt="shoes" />
                </div>
                <div className='advert-card'>
                    <img src={tisort} alt="tisort" />
                </div>
                <div className='advert-card'>
                    <img src={tisort} alt="tisort" />
                </div>
            </Slider>
        </div>
    )
}

export default Advert
