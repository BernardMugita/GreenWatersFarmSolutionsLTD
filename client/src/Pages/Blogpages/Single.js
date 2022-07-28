import '../../CSS/BlogCSS/Single.css';
import Subheader from '../../component/Subheader';
import Sidebar from '../../component/Sidebar';
import Singlepost from '../../component/Singlepost';

export default function Single() {
  return ( 
      <div className='Single'>
    <Subheader/>
    <div className="body">
            <Singlepost/>
            <Sidebar/>
    </div>
  </div>
  
)};
