import React from 'react';
// import Link  from 'react-router-dom';

import { FaHome , FaServer } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
            <h1>Sidebar</h1>

            <a href="/">
            <div className="Content-sidebar active">
            <FaHome className='icon-sidebar' />
            <span>Home</span>
            </div>
            </a>

            

            <a href="/about">
            <div className="Content-sidebar">
            <IoIosInformationCircleOutline className='icon-sidebar' />
            <span>About</span>
            </div>
            </a>
            <div className="Content-sidebar">
            <FaServer className='icon-sidebar' />
            <span>Servers</span>
            </div>
            <div className="Content-sidebar">
            <ImProfile className='icon-sidebar' />
            <span>Profile</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar