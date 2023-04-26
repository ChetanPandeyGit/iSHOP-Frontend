import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VCard from './VCard'
import axios from 'axios'

const Bestseller = () => {
  const [data,setData] = useState([])
    const [limit, setLimit] = useState(8)

    useEffect(()=>{
        axios
         .get("https://i-shop-backend-l58p.vercel.app/bestseller")
         .then(res=>{
            setData(res.data)
         })
    },[])
  
   
  const handleMore =() =>{
    setLimit((prevData) => prevData + 8)
}
    return (      
      <div className="best-seller-cont">
            <span>BEST SELLER</span>
            <div className="bs-nav">
                <Link to='/store'>All</Link>
                <Link to='/macbook'>Mac</Link>
                <Link to='/iphone'>iPhone</Link>
                <Link to='/ipad'>iPad</Link>
                <Link to='/ipad'>iPod</Link>
                <Link to='/accessories'>Accessories</Link>
            </div>
            <div className="best-seller">
          <VCard data={data} limit={limit} />
            </div>
            <span className='load-more' onClick={handleMore}>LOAD MORE</span>
    </div>
  )
}

export default Bestseller