import React from 'react';
import '../CSS/CSScomponent/banner.css';
import {IoJournalSharp} from 'react-icons/io5';

function Banner() {
  return (
  <div className='banner'>
      <h1>GWFSL Blog<IoJournalSharp className='icon'/></h1>
      <p>A farmer's diary</p>
  </div>
  );
}

export default Banner;
