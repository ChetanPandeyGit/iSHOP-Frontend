import React from 'react'
import './components.css'
import { Link, useNavigate } from 'react-router-dom'
import search from '/Images/search_icon.svg'
import cart from '/Images/bag_icon.svg'
import profile from '/Images/profile_icon.svg'
import { useSelector } from 'react-redux'
import { log , logged, logout} from '../Auth/Login'

const Header = () => {
    const { cartItems,total } = useSelector((state) => state.cart);
    const navigate=useNavigate()

    const loginPage=()=>{
        navigate("/login")
    }
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
                    <div className="gap"><img  src={profile} alt="profile" /><span id='prof'>      
                        {!logged ? ( <>
                            <span onClick={loginPage}>Login</span>
                        </>)
                        : (
                            <>
                            <span >{log}</span>
                            <button onClick={logout} className='logout'>logout</button>
                            </>
                          )}
                        
                        </span> </div>
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