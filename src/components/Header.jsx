import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
import search from '/Images/search_icon.svg'
import cart from '/Images/bag_icon.svg'
import profile from '/Images/profile_icon.svg'
import Login from '../Auth/Login'
import { useSelector } from 'react-redux'

const Header = () => {
    const { cartItems,total } = useSelector((state) => state.cart);
    return (
        <>
            <div className="top-select">
                <div className="left-select">
                    <select name="language" id="language">
                        <option value="English">EN</option>
                        <option value="Hindi">HN</option>
                    </select>
                    <select name="currency" id="currency">
                        <option value="USD">$</option>
                        <option value="JNY">¥</option>
                        <option value="EUR">€</option>
                        <option value="RUB">₽</option>
                        <option value="GBP">£</option>
                    </select>
                </div>
                <div className="right-select">
                    <div className="gap"><Link to="login" element={<Login/>}><img  src={profile} alt="profile" /><span>My Profile</span> </Link></div>
                    <div className="gap"><Link to="/cart"><img  src={cart} alt="cart" /><span>{cartItems.length}&nbsp; Items</span></Link></div>                    
                    <span>₹{total}</span>
                    <div className="gap"><Link to="/"><img  src={search} alt="search" /></Link></div>                    
                </div>
            </div>
            <hr />
            </>
    )
}

export default Header