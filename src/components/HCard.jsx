import React from 'react'

import {AiFillStar} from 'react-icons/ai'

const HCard = ({pic,title}) => {
  return (
    <div className="h-card">
          <div className="v-image">
              <img src={pic} alt="item" />
          </div>
          <div className="detail">              
        <span className='item-title'>{ title}</span>
              <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
              <span>$499 <span>$599</span></span>
          </div>
    </div>
  )
}

export default HCard