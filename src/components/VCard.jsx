import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

const VCard = ({ data, limit }) => {
    const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (<>   
    {data.slice(0, limit).map((i) => {
      return (
        
        <div className="v-card" key={i.id}>
          <div className="v-image">
            <span className='hot'>HOT</span>
            <img src={i.image} alt="item" />
          </div>
          <div className="detail">
            <hr />
            <span className='item-title'>{i.name}</span>
            <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
            <span>₹{i.price}</span>
            <button onClick={() => addToCartHandler({
              name:i.name, price:i.price, id:i.id, quantity: 1, image:i.image
            })}>Add to Cart</button>
          </div>
        </div>
           )})
    } 
  </>
  )
}

export default VCard