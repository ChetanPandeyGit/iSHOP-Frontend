import React from 'react'
import { Link } from 'react-router-dom'
import icon from '/Images/iSHOP Logo.svg'

const Navbar = () => {
  return (
      <div className='nav'>
          <img src={icon} alt="icon" />
          <div className="navbar">
             <Link to='/' >HOME</Link> 
             <Link to='/store' >STORE</Link> 
             <Link to='/iphone' >IPHONE</Link> 
             <Link to='/ipad' >IPAD</Link> 
             <Link to='/macbook' >MACBOOK</Link> 
             <Link to='/accessories' >ACCESSORIES</Link> 
          </div>
      </div>
  )
}

export default Navbar