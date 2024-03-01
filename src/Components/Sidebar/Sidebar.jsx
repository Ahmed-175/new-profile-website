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
            <h1>أجراء الموقع</h1>

            <a href="/">
            <div className="Content-sidebar active">
            <FaHome className='icon-sidebar' />
            <span>الصفحة الرئسية</span>
            </div>
            </a>

            

            <a href="/about">
            <div className="Content-sidebar">
            <IoIosInformationCircleOutline className='icon-sidebar' />
            <span>معلومات عني</span>
            </div>
            </a>
            <div className="Content-sidebar">
            <FaServer className='icon-sidebar' />
            <span>الخدمات المقدمة</span>
            </div>
            <div className="Content-sidebar">
            <ImProfile className='icon-sidebar' />
            <span>المشريع الخاصة بي</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar