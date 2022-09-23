import React from 'react';
import { AiFillMacCommand } from "react-icons/ai";
import { DiBingSmall } from "react-icons/di";
import { ImProfile } from "react-icons/im";
import { IoLogoIonic } from "react-icons/io";
import { MdDashboard, MdHealthAndSafety, MdNotificationsActive, MdOutlineSettingsPower, MdOutlineSupervisedUserCircle, MdProductionQuantityLimits, MdQueryStats } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { TbTruckDelivery } from "react-icons/tb";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
       <div className="sidebar">
         <div className="top"> 
         <DiBingSmall className='icon'/>
             <div className="logo">syGroup</div>
           </div>
           <hr />
         <div className="center">
           <ul>
            <p className='title'>MAIN</p>
            <li>
              <MdDashboard className='icon'/>
              <span>DashBoard</span>
              </li>
           </ul>
           <ul>
            <p className='title'>LIST</p>
            <li><MdOutlineSupervisedUserCircle className='icon'/><span>Users</span></li>
           </ul>
           <ul>
            <li>
               <MdProductionQuantityLimits className='icon'/>
              <span>Products</span></li>
           </ul>
           <ul>
            <li><AiFillMacCommand className='icon'/><span>Orders</span></li>
           </ul>
           <ul>
            <li><TbTruckDelivery className='icon'/><span>Delivery</span></li>
           </ul>
           <ul>
            <p className='title'>USEFUL</p>
            <li><MdQueryStats className='icon'/><span>Stats</span></li>
           </ul>
           <ul>
            <li><MdNotificationsActive className='icon'/><span>Notification</span></li>
           </ul>
           <ul>
            <p className='title'>SERVICE</p>
            <li><MdHealthAndSafety className='icon'/><span>System Health</span></li>
           </ul>
           <ul>
            <li><IoLogoIonic className='icon'/><span>Logs</span></li>
           </ul>
           <ul>
            <li><MdOutlineSettingsPower className='icon'/><span>Settings</span></li>
           </ul>
           <ul>
            <p className='title'>USER</p>
            <li><ImProfile className='icon'/><span>Profile</span></li>
           </ul>
           <ul>
            <li><RiLogoutCircleRLine className='icon'/><span>Logout</span></li>
           </ul>
         </div>
         <div className="bottom">
           <div className="colorOptions"></div>
           <div className="colorOptions"></div>
          
         </div>
       </div>
    </>
  );
};

export default Sidebar;