import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import './Container.css';
import { FaGithub ,FaInstagram  ,FaFacebook ,FaLinkedin   } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Servers from '../../Pages/Servers/Servers';
import Profile from '../../Pages/Profile/Profile';
let disbar = false
const menubart =() => {

  if(  disbar === false){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = "0";
    disbar = true
    const menu =document.querySelector('.menu');
    menu.style.transform = 'rotate(-180deg)';
    
  }else{
    const sidebar = document.querySelector('.sidebar');
    const menu =document.querySelector('.menu');
    sidebar.style.left = "-55%";
    disbar = false;
    menu.style.transform = 'rotate(180deg)';
  }


}

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
        <div className='menu' onClick={() => { menubart() }} > <MdMenu  className='menu-icon' /></div>
      </header>


<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/servers" element={<Servers />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</BrowserRouter>



    </div>
  )
}

export default Container