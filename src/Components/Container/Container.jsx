import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import './Container.css';
import { FaGithub ,FaInstagram  ,FaFacebook ,FaLinkedin   } from "react-icons/fa";





const Container = () => {
  return (
    <div className='container-all'>

      <header id='header'>
        <a href="/" className="logo">أحمد فرج</a>
        <nav>
          <ul>
            <li><a href="https://github.com/Ahmed-175?tab=repositories"  target='_black'><FaGithub /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100072925321728" target='_black'><FaFacebook /></a></li>
            <li><a href="https://www.linkedin.com/in/ahmed-farag-3b455626b/"  target='_black'><FaLinkedin  /></a></li>
            <li><a href="https://www.instagram.com/abmedfarag175/?hl=en"  target='_black'><FaInstagram /></a></li>
          </ul>
    
        </nav>
      </header>


<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>



    </div>
  )
}

export default Container