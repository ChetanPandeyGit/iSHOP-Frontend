import SweetPagination from "sweetpagination";
import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

export default function StoreProducts({ category }) {
  const dispatch = useDispatch();
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill(category));
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <>
    <div className="store-prod">
      {currentPageData.slice(0,9).map((i) => {
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
        )
      })}
      </div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={category}
        navigation={true}
      />
    </>
  )
}
