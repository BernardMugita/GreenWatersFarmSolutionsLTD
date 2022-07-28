import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/Main/home.css';
import {GiFarmer} from 'react-icons/gi';
import {GiWaterTower} from 'react-icons/gi';
import {GiFist} from 'react-icons/gi';
import logo from '../../Resources/logo3.png';
import Tower from '../../Resources/Tower.jpeg';
import Nursery from '../../Resources/nursery.jpeg';
import Banner from '../../Resources/banner.jpeg';
import {MdTipsAndUpdates} from 'react-icons/md';
import MrG from '../../Resources/MrG.jpg';
import Tish from '../../Resources/Tish.jpg';
import Mugita from '../../Resources/Mugita.jpeg';
import {BiChevronsDown} from 'react-icons/bi';


function Home() {
  return (
  <div>
    <div className="intro">
      <div className="title"><br /><br /><br />
        <img src={logo} alt="Logo" className='logo'/>
        <h1>Greenwaters Farm Solutions LTD</h1>
            <p>Revolutionary Farming</p>
      </div>
      <div className="mantra">
          <div className="row">
              <div className="col-sm-4">
              <GiFarmer className='bannericons'/><br /><br />
                    <p>To promote and strengthen investment in agribusiness and value chain development</p>
              </div>
              <div className="col-sm-4">
              <GiWaterTower className='bannericons'/><br /><br />
                    <p>To promote tech-small scale agribusinesses and climate-smart agriculture</p>
              </div>
              <div className="col-sm-4">
              <GiFist className='bannericons'/><br /><br />
                    <p>Economic empowerment for the youth and women</p>
              </div>
          </div>
          <BiChevronsDown className='down'/>
      </div>
      </div>
      <div className="homebody">
      <div className="vision">
        <h1>Vision</h1>
            <p>
              We Work in the Farm to Live A Rich And Fulfilling Life, 
              Reconnecting To Nature, Our Family And Our Community.  
            </p>
      </div>
      <div className="mission">
        <h1>Our Mission</h1>
        <div className="row">
              <div className="col-md-6">
                    <p>
                        1.	Promote and strengthen agribusiness and value chain development, integrating agribusiness into market-oriented systems.</p>
                       <p> 2.	Promote small-scale agribusinesses and climate-smart agriculture (CSA) as means of employment and entrepreneurial opportunities for youth and women.</p>
                    
              </div>
        <div className="col-md-6">
            <img src={Tower} alt="" />
        </div>
        </div>
      </div>
      <div className="progres">
        <h1>Our Progress</h1>
        <div className="row">
          <div className="col-md-6">
            <img src={Nursery} alt="" />
          </div>
          <div className="col-md-6">
              <p>
                Currently, our farm is operating on an average capacity our goal is to ensure that all the moving parts of the
                organization will reach completion.
                As shown above, the progress of each element is independent and improves separately. It is our goal and aspiration that
                that in due time we will have the entire organization up and running.
              </p>
          </div>
        </div>
      </div>
      <div className="Farm">
        <h1>THE FARM</h1>
        <div>
          <img src={Banner} alt="" className="bgfarm" />

        </div>
      </div>
      <div className="GWS">
        <div className="row">
        
        
        <div className="col-sm-6" id='leftside'>
            <MdTipsAndUpdates className='idea'/>
        </div>
        <div className="col-lg-4" id="rightside">
              <p>
              My tip number one, and a very important tip when you’r
              just starting out approach your farm as a business, not as a hobby.
              But understand that if you want to scale up from your own garden, 
              into generating an income out of it,. There’s a whole bunch of aspects 
              that come into play. You need to make sure that there’s enough demand 
              for locally grown products in your area. 
              That will allow you to make a living out of it.
              You need to identify who your customers are going to be, 
              what crops you’re going to grow for these customers and how much of each 
              individual crop you will have to grow.
              </p>
        </div>
        </div>
      </div>
      <div className="team">
        <h1>Meet The Team</h1><br />
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="team-img">
                <img src={MrG} alt="" />
            </div>
            <div className="team-title">
                <h2>Mugita Gesongo</h2>
                <p>C.E.O & Founder</p>
            </div>
          </div>
          <div className="col-md-6">
          <div className="team-img">
                <img src="" alt="" />
            </div>
            <div className="team-title">
                <h2>Teresia Weisiko</h2>
                <p>Co. Founder</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <div className="team-img">
                <img src={Tish} alt="" />
            </div>
            <div className="team-title">
                <h2>PaulAnne Matinde</h2>
                <p>Director</p>
            </div>
          </div>
          <div className="col-md-6">
          <div className="team-img">
                <img src={Mugita} alt="" />
            </div>
            <div className="team-title">
                <h2>Bernard Mugita</h2>
                <p>Director</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  </div>

  );
}

export default Home;
