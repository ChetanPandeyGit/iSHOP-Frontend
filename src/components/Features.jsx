import React from 'react'
import FBox from './FBox'
import F1 from '/Images/shipping.svg'
import F2 from '/Images/refund.svg'
import F3 from '/Images/support.svg'

const Features = () => {
  return (
      <div className="features">
          <FBox F={ F1} title='FREE SHIPPING' />
          <FBox F={ F2} title='100% REFUND' />
          <FBox F={ F3} title='SUPPORT 24/7' />
    </div>
  )
}

export default Features