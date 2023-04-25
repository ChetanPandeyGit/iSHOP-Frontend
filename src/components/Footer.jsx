import React from 'react'
import Fb from '/Images/facebook.svg'
import Tw from '/Images/twitter.svg'

const Footer = () => {
  return (
      <div className="footer">
          <hr />
          <div className="conclusion">
              <div className="ishop box">
                  <span>iSHOP</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
              </div>
              <div className="follow-us box">
                  <span>Follow Us</span><br /><br />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> <br />
                    <img src={Fb} alt="facebook" />
                    <img src={Tw} alt="facebook" />
              </div>
              <div className="contact-us box">
                  <span>Contact Us</span><br /><br />
                  <p>iShop: address @building 124
                      <br /> Call us now: 0123-456-789
                     <br /> Email: support@whatever.com</p>
              </div>
          </div>
          <hr style={{width: "75%",margin:'auto'}}/>
    </div>
  )
}

export default Footer