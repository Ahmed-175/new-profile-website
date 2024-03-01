import React from 'react'
import './Profile.css'
import tests from './tests.jpg'
import preview from './preview.png';
import uni from './univ.jpg';
import old from './oldprofile.jpg';
import chess from './chess.jpg';
import newpro from './newprofile.jpg';

function Profile() {
  return (
    <div className='profile'>
      
      <div className="projects">
        <h2>موقع للاختبارات</h2>
        <img src={tests}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
        <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>
      </div>
     

      <div className="projects">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={preview}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
                <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>

      </div>
      <div className="projects">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={old}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
        <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>

      </div>

      <div className="projects">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={chess}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
                <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>

      </div>
      <div className="projects">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={newpro}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
                <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>

      </div>
      <div className="projects">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={uni}  className='img-project' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam iusto quas possimus laudantium est.</p>
                <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>

      </div>



    </div>
  )
}

export default Profile