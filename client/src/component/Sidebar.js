import { useEffect, useState } from 'react';
import '../CSS/CSScomponent/Sidebar.css';
import Gwfimg from '../Resources/GWFSB.png';
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Sidebar() {
  const [cats, getCats] = useState([]);
    useEffect(()=>{
      const getCats = async() =>
      {
        const res = await axios.get("/categories");
        getCats(res.data);
      }
      getCats();
    })
  return (
  <div className='sidebar'>
    <div className="sidebarItem">
      <span className="sidebarTitle">About GWFSL</span><br />
        <img src={Gwfimg} alt="" />
        <p>
          GWFSL Blog is a farmer's diary written from a farmers point
          of view; it is a collection of different articles from the 
          farm and related sectors.
        </p>
    </div>
    <div className="categories">
      <span className="sidebarTitle">Categories</span><br />
        <ul>
          {cats.map((c) => (
            <Link to={`/?cats=${c.name}`}>
                  <li>(c.name)</li>
            </Link>
          ))}
        </ul>
    </div>
    <div className="follow">
      <span className="sidebarTitle">Follow Us</span><br />
      <div className="social">
            <TiSocialFacebook className='medias'/>
            <TiSocialInstagram className='medias'/>
            <TiSocialTwitter className='medias'/> 
            <TiSocialLinkedin className='medias'/>
      </div>
    </div>
  </div>
  );
}

export default Sidebar;
