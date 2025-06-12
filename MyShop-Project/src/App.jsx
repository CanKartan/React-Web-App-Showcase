import './App.css'
import Pagecontainer from './container/Pagecontainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { basketSlice, setDrawer } from './redux/slices/basketSlice'

function App() {

  const { products, drawer } = useSelector((store) => store.basket);
  const dispacth = useDispatch();


  return (
    <BrowserRouter>
      <Pagecontainer>
        <Header />
        <Drawer anchor='right' open={drawer} onClose={() => dispacth(setDrawer())}>
          <div className='basket-detail'>
            <h5>Product Details</h5>
            <button className='basket-button'>Proceed to Payment</button>
            <p>Total Product Price : {products.reduce((acc, product) => acc + (product.price * product.count), 0).toFixed(2)} $ </p>
          </div>
          <div className='basket-container'>
            {
              products && products.map((product) => {
                return (
                  <div className='basket-product' >
                    <img src={product.image} />
                    <p>Product Name: {product.title}</p>
                    <p>Price: {product.price} $</p>
                    <p>Quantity : {product.count}</p>
                    <p>Total Price per Quantity : {product.count * product.price} $</p>
                    <button className='delete-basket'>Remove Product</button>
                  </div>

                )
              })
            }
          </div>
        </Drawer>
        <RouterConfig />
        <Loading />
      </Pagecontainer>
    </BrowserRouter>
  )
}

export default App
