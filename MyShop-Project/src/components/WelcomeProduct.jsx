import React from 'react'
import '../css/Product.css'
import { useNavigate } from "react-router";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../css/WelcomeProduct.css'

function Product({ product }) {
    const { id, title, price, image, rating } = product;
    const navigate = useNavigate();
    const rateValue = rating.rate;

    const getStars = (rate) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rate >= i) {
                stars.push(<FaStar key={i} />);
            }
            else if (rate + 0.5 >= i) {
                stars.push(<FaRegStarHalfStroke key={i} />);
            }
            else {
                stars.push(<FaRegStar key={i} />);
            }
        }
        return stars;
    }


    return (
        <div>
            <div className='product-card'>
                <img className='product-image' src={image} />
                <p>{title}</p>
                <h3 className='price-title'>{price} $</h3>
                <div className='rate-detail'>
                    {getStars(rateValue)}
                </div>
                <div onClick={() => navigate("/product-details/" + id)}>
                    <button className='welcome-product-button' >Detail</button>
                </div>
            </div>
        </div>
    )
}

export default Product
