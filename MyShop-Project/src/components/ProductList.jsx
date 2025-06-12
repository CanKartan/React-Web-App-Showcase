import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productslice';
import Product from './Product';
import '../css/ProductList.css'

function ProductList() {
    const dispacth = useDispatch();
    const products = useSelector((store) => store.product.products)
    console.log(products)
    useEffect(() => {
        dispacth(getAllProducts())
    }, [])


    return (
        <div>
            <div className='product-list'>
                {
                    products && products.map((products) => (
                        <Product key={products.id} product={products} />
                    ))

                }
            </div>

        </div>
    )
}

export default ProductList
