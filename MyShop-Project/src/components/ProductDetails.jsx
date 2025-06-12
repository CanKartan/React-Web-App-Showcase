import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { setSelectedProduct } from '../redux/slices/productslice';
import "../css/ProductDetail.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { addToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments"
    const [showAlert, setshowAlert] = useState(false);
    const [count, setCount] = useState(1);
    const [comments, setComments] = useState([]);
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const { title, price, image, description } = selectedProduct;

    const getProductById = () => {
        products && products.map((products) => {
            if (products.id == id) {
                dispatch(setSelectedProduct(products));
            }
        })
    }

    const incriment = () => {
        setCount(count + 1)
    }
    const decriment = () => {
        setCount(count > 1 ? count - 1 : 1)
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${COMMENT_URL}?postId=${id}`)
            setComments(response.data);
        }
        catch (err) {
            console.error(err);
        }

    }

    const addBasket = () => {
        setshowAlert(true);
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count: count
        }
        dispatch(addToBasket(payload))

        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    }




    useEffect(() => {
        getProductById()
        getComments()
    }, [id])


    return (
        <div>
            <div className="product-card-detail">
                <img className="product-detail-img" src={image} alt={title} />
                <div className="product-detail-content">
                    <h2>{title}</h2>
                    <p className="detail-description">{description}</p>
                    <p className="detail-price">{count * price}$</p>
                    <div className="detail-icons">
                        <CiCirclePlus onClick={incriment} />
                        <span style={{ userSelect: "none" }}>
                            {count}
                        </span>  <CiCircleMinus onClick={decriment} />
                    </div>
                    <div className='detail-button-container'>
                        <button onClick={addBasket} className='add-buton'>
                            Add
                        </button>
                        {
                            showAlert && (
                                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                    Product added to basket
                                </Alert>)
                        }
                    </div>

                </div>
            </div>
            <div className='detail-comments'>
                <h4>Comments</h4>
                <div>
                    {comments.length === 0 ? (
                        <p>No comment.</p>
                    ) : (
                        comments.map(comment => (
                            <div className='detail-comment-card' key={comment.id}>
                                <div className='comment-name'>
                                    <Avatar sx={{ bgcolor: deepOrange[900] }}>
                                        {comment.email.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <p>({comment.email})</p>
                                </div>

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p>{comment.body}</p>
                            </div>
                        ))
                    )
                    }


                </div>

            </div>


        </div >
    )
}

export default ProductDetails
