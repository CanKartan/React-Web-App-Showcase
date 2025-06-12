import React from 'react'
import ProductList from '../components/ProductList'
import Welcome from '../components/Welcome'
import Advert from '../components/Advert'

function Home() {
    return (
        <div>
            <Welcome />
            <Advert />
            <ProductList />
        </div>
    )
}

export default Home
