import './App.css';
import Home from './Pages/Main/Home';
import About from './Pages/Main/About';
import Blog from './Pages/Main/Blog';
import Blogposts from './Pages/Blogpages/Blogposts';
import Newpost from './Pages/Blogpages/Newpost';
import Settings from './Pages/UserDetails/Settings';
import Login from './Pages/UserDetails/Login';
import Signup from './Pages/UserDetails/Signup';
import Single from './Pages/Blogpages/Single';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { context } from './context/context';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useContext } from 'react';

function App() {
  const { user } = useContext(context);
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/blog/Blogposts" element={<Blogposts/>}/>
            <Route exact path="/blog/Newpost" element={<Newpost/>}/>
            <Route exact path='/blog/Settings' element={<Settings/>}/>
            <Route exact path='/blog/Login' element={<Login/>}/>
            <Route exact path='/blog/Signup' element={<Signup/>}/>
            <Route exact path='/blog/Single' element={<Single/>}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
