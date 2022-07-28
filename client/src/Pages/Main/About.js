import React from 'react';
import '../../CSS/Main/About.css'
import farm from '../../Resources/farm2.jpeg';
import onions from '../../Resources/nursery.jpeg';
import open from '../../Resources/open.jpeg';
import toma from '../../Resources/toma.jpeg'
import toma2 from '../../Resources/toma2.jpeg';
import toma3 from '../../Resources/toma3.jpeg';
import support from '../../Resources/support.jpg';
import fodder1 from '../../Resources/Project.jpeg';
import fodder2 from '../../Resources/Tractor.jpeg';

function about() {
  return (
  <div className='About'>
      <div className="about-us">
            <div className="about-text">
            <h1>About Us</h1>
            <p>
                      GreenWaters Farm Solutions Ltd is a limited company registered with the Registrar of Companies (Reg. No…), 
                      in the Republic of Kenya. It is an Agribusiness development company whose offices are located in Migori County, 
                      Kuria West Sub-County, Mabera, Canada Village. Our Email address is greenwatersfarm@gmail.com, 
                      Phone No. +254 722 259798. Alternative No. +254 726 205942. The company has three main objectives:
                      </p>
              <div className="row">
                <div className="col-sm-4">
                <p>
                        To promote and strengthen investment in agribusiness and value chain development, 
                        integrating agribusiness into market-oriented systems in support of the efforts to 
                        ensure food security in the area. We emphasise on small-scale research, market studies 
                        and linkages of farm produce to markets.
                      </p>
                </div>
                <div className="col-sm-4">
                <p>
                  To promote tech-small scale agribusinesses and climate-smart agriculture (CSA) 
                  in the area and create employment and entrepreneurial opportunities for youth and women.
                   </p>
                </div>
                <div className="col-sm-4">
                    <p>
                      To build capabilities of youth and women in agribusiness as a critical means of 
                      enhancing farm productivity, marketing performance and wealth creation. Particular 
                      attention is paid to offering learning opportunities to primary and secondary 
                      school learners and community members (especially youth and women) to appreciate 
                      Climate-Smart Agriculture(CSA) for employment and wealth creation. 
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className='summary'>
          <div className="intro">
              <h1>Summary of Operations</h1>
                <p>The company offices and operations are in a 3.4 hectares (8.4 acres) farm. The farm is completely fenced,
                  has a built farmhouse and has been partitioned into six (6) portions with the following activities currently going on. 
                  </p>
          </div>
          <div className="sumbody">
          <h2>Different varieties of vegetables (horticulture)</h2>
                    <h3>Phase I: Eight (8) greenhouses in 0.43 acres. </h3>
                  <div className="row">
                    <div className="col-sm-4">
                    <h4>Project One</h4> 
                      <h5>Tomatoes</h5>
                        <img src={ farm } alt=""/>
                        <p>
                          We started with tomatoes in March 2021, fruits matured in June 2021 
                          with the first harvest in mid-June. The last harvest is due in November 2021 
                          to close Project 1.
                        </p>
                    </div>
                    <div className="col-sm-4">
                      <h4>Project Two </h4>
                        <h5>Onions</h5>
                          <img src={ onions } alt=""/> 
                          <p>
                            The seedlings are in nurseries. Transplanting into the 8 greenhouses is planned 
                            for November 2021. This is a rotational practice to cure the soils from bacteria..
                            </p>
                    </div>
                    <div className="col-sm-4">
                      <h4>Project Three</h4> 
                        <h5>Beans</h5>
                        <img src={open} alt=""/>
                        <p>
                          In the month of October 2021, we planted  beans on a 2-acre piece of land. 
                          The crop is currently under weeding. Harvesting is expected in December, 2021.
                          </p>
                    </div>
                  </div>
          </div>   
            </div>
            <div className='four'>

                <h3>Phase II: Open field farming of vegetables</h3>
                  <h4>Project Four</h4> 
                  <img src={open} alt="" />
                    <p>
                      Vegetables: We have set aside 2 acres of land for various varieties of vegetables: 
                      spinach, kales, kunde, nsaga, managu, etc.<br />  The seedlings are currently in nurseries. 
                      Transplanting is planned for mid-October, 2021. <br /> The first harvests are expected in
                      mid-November, 2021. [Picture 04].
                      </p>
            </div>
            <div className="toma">
            <h3>Phase III: Tomatoes back into the greenhouses</h3>
                  <h4>Project Five</h4> 
                    <p>
                      Tomatoes. Project 2 produce (onions) in Phase I will be harvested in February 2022. 
                      In the same month (February 2022), we will start tomato nurseries to be transplanted 
                      in March 2012 into the 8 greenhouses.
                      </p>
                      <div className="row" id="images">
                        <div className="col-md-4">
                            <img src={toma} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={toma2} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={toma3} alt="" />
                        </div>
                      </div>
            </div>
                <div className='animals'>
                <h3>Phase IV: Animal farming</h3>
                  <p>We are currently developing structures for three (3) types of animals:</p>
                  <div className="row">
                  <div className="col-md-4">
                        <h4>Project 6: Dairy cows</h4>
                          <img src="" alt="" />
                          <p>We plan to start with five (5) mixed cow breeds in February/March 2022. We prefer 
                            mixed cow breeds because of their productivity, both in terms of improved milk production 
                            and disease resistance.
                            </p>
                    </div>
                    <div className="col-md-4">
                    <h4>Project 7: Meat goats</h4>
                      <img src="" alt="" /> 
                      <p>
                        This is a goat-fattening project. The farm is located 1km away from Mabera Livestock Market, 
                        the largest livestock market in Migori County. We plan to buy, fatten and sell goats in this 
                        market. We have set aside 0.5 acres of land for this project which is planned to take off in 
                        January 2022.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Project 8: Local chicken</h4>
                          <img src="" alt="" /> 
                        <p>
                          We plan to raise local chicken for both eggs and meat supplies to the local market. Currently, 
                          we have a few chicken as can be seen from the picture. These are for household consumption. 
                          Commercial production will start in early 2022. 
                          </p>
                    </div>
                  </div>   
                  </div>
                  <div className='fodder'>
                      <h3>	Fodder production </h3> 
                    <div className="row">
                      <div className="col-lg-6">
                        <h4>Project 9 – Fodder 1</h4>
                            <img src={fodder1} alt="" />
                          <p>
                            We have set aside from this farm 0.5acres for immediate fodder production which has already 
                            been planted (October 2021). It will be ready in three-months (i.e., January 2021) to start 
                            feeding the first group of cows in February 2022 (See Project 6).
                            </p>
                      </div>
                      <div className="col-lg-6">
                          <h4>Project 10 –  Fodder 2</h4>
                              <img src={fodder2} alt="" /> 
                          <p>The company owns another 7.19 hectares (17.8 cares) (Bugumbe/Isibania 1198), about 5km away 
                            where we plan to grow more fodder (See copy of Title Deed in Annex 3). This will be sufficient 
                            for all animal projects. The timing for this project is June, 2022.
                            </p>
                      </div>
                    </div>
                  </div>
                  <div className="support">
                    <h3>Supporting materials</h3>
                        <img src={support} alt="" />
                        <p>The company owns 11.67 acres (Bugumbe/Mabera/1822: 9.5 acres, and Bugumber/Mabera/1825: 2.17 acres) 
                          planted with trees that have matured. This forest provides all 
                          timber required to develop structures in the farm.The land that is currently not under cultivation 
                          is supporting indigenous livestock (cows, goats & chicken). These supply manure as per agronomy advice 
                          that the best manure agri-farming is goat manure, cow dung and well decomposed chicken manure. We use 
                          this manure to improve fertility content of the soils through injection of nitrogen and other trace 
                          element like magnesium that are good for plant growth. This will reduce the cost of fertilizer, and 
                          hence the cost of production.
                          </p>
                    </div>
  </div>
  );
}

export default about;
