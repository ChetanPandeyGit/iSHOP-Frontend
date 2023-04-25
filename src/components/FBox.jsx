import React from 'react'

const FBox = ({F, title}) => {
  return (
      <div className="f-box">
          <img src={F} alt="feature" />
          <span>{title}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, blanditiis iusto veniam ex maxime quisquam tempora!</p>
    </div>
  )
}

export default FBox