import React, { useState } from 'react'
import '../css/Header.css'
import logo from '../images/MyShopLogo.png'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const [theme, setTheme] = useState(false);
    const { products } = useSelector((store) => store.basket);
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme)
        if (theme) {
            root.style.backgroundColor = "#393E46";
            root.style.color = "#fff";

        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img onClick={() => navigate('/')} className='logo' src={logo} />
                <p onClick={() => navigate('/')} className='logoText'>MyShop</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='Search'></input>
                <div>
                    {
                        theme ? <CiLight className='icons' onClick={changeTheme} /> : <MdDarkMode className='icons' onClick={changeTheme} />
                    }

                    <Badge onClick={() => dispacth(setDrawer())} color="error" badgeContent={products.length}>
                        <CiShoppingBasket className='icons' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header
