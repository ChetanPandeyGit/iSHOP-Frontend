import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Ipad = () => {
  const [productList,setProductList] = useState([])
  const dispatch = useDispatch();

  useEffect(()=>{
    axios
     .get("http://localhost:3001/ipad")
     .then(res=>{
      setProductList(res.data)
     })
  }, []) 
  
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          image={i.image}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, image }) => (
  <div className="productCard">
    <img src={image} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, image })}>
      Add to Cart
    </button>
  </div>
);

export default Ipad