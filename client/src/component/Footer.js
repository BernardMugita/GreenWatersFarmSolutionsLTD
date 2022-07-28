import React from 'react';
import { Link } from "react-router-dom";
import '../CSS/CSScomponent/Footer.css';
import Logo from '../Resources/logo3.png'
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti'


function Footer() {
  return (
  <div className='footer'>
      <div className="logo">
        <img src={Logo} alt="" />
        <p>GreenWaters Farm Solutions LTD</p><br />
      </div>
      <div className="social">
            <TiSocialFacebook className='medias'/>
            <TiSocialInstagram className='medias'/>
            <TiSocialTwitter className='medias'/> 
            <TiSocialLinkedin className='medias'/>
      </div>
      <div className="footer-list">
      <div className="left">
        <h2>Links</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul>
            
      </div>
      <div className="middle">
          <h2>Quick Access</h2>
          <ul>
            <li><Link to='FAQs'>FAQs</Link></li>
            <li><Link to='Gallery'>Gallery</Link></li>
            <li><Link to='TermsofService'>Terms of Service</Link></li>
          </ul>
      </div>
      <div className="right">
          <h2>Contact Us</h2>
          <ul>
            <li>Tell: +254 722 259798</li>
            <li>Tell: +254 726 05942</li>
            <li>Email: <a href="mailto:greenwatersfarm@gmail.com">greenwatersfarm@gmail.com</a></li>
          </ul>
      </div>
      </div>
      <div class="copyR">  
           <p> 
           &copy;{new Date().getFullYear()} All rights Reversed. <Link className='rights' to="/">GreenWaters Farm Solutions LTD</Link>
           </p>  
        </div>
  </div>
  );
}

export default Footer;
