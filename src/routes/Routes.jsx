import { Routes, Route } from 'react-router-dom'
import Accessories from '../pages/Accessories'
import Home from '../pages/Home'
import Ipad from '../pages/Ipad'
import Iphone from '../pages/Iphone'
import Macbook from '../pages/Macbook'
import Store from '../pages/Store'
import Login from '../Auth/Login'
import Cart from '../pages/Cart'
import Signin from '../Auth/Signin'

function Router() {
  return (    
    <Routes>
      <Route exact path='/'  element={<Home/>}/>            
      <Route path='/store' element={<Store />} />
      <Route path='/iphone' element={<Iphone />} />
      <Route path='/ipad' element={<Ipad />} />
      <Route path='/macbook' element={<Macbook />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/login' element={<Login />} /> 
      <Route path='/signin' element={<Signin />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Router