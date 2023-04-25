import React from 'react'
import FLinkSec from './FLinkSec'
import P1 from '/Images/Western_union.svg'
import P2 from '/Images/master_card.svg'
import P3 from '/Images/Paypal.svg'
import P4 from '/Images/visa.svg'

const FootLinks = () => {
  return (<>
      <div className="foot-links">
          <FLinkSec title='Information'/>
          <FLinkSec title='Service'/>
          <FLinkSec title='Extras'/>
          <FLinkSec title='My Account'/>
          <FLinkSec title='Useful Links'/>
          <FLinkSec title='Our Offers'/>
      </div>
      <hr />
      <div className="payment">
          <img src={P1} alt="Payment option" />
          <img src={P2} alt="Payment option" />
          <img src={P3} alt="Payment option" />
          <img src={P4} alt="Payment option" />
      </div>
      </>
  )
}

export default FootLinks