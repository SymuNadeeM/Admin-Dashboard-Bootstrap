import React from 'react';
import { BiFullscreen, BiSearchAlt2 } from "react-icons/bi";
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { MdLanguage, MdNotifications, MdOutlineDarkMode } from 'react-icons/md';
import { TiThListOutline } from 'react-icons/ti';
import topavar from "../../Assets/Images/atomtop.jpg";
import './Navbar.scss';

const Navbar = () => {
  return (
   <div className="navbar_part">
      <div className="wrapper">
          <div className="search">
             <input type="text" placeholder='Search...' />
             <BiSearchAlt2/>
          </div>
          <div className="items">
              <div className="item">
                 <MdLanguage  className='icon' />
                 English
              </div>
              <div className="item">
                 <MdOutlineDarkMode className='icon'/>
                
              </div>
              <div className="item">
                 <BiFullscreen className='icon' />
                
              </div>
              <div className="item">
                 <MdNotifications className='icon'/>
                <div className="count">1</div>
              </div>
              <div className="item">
                 <BsFillChatDotsFill className='icon'/>
                 <div className="count">1</div>
              </div>
              <div className="item">
                 <TiThListOutline className='icon'/>
             
              </div>
              <div className="item">
                 <img src={topavar} alt="" className='topavatar' />
             
              </div>
              <div className="item">
                 <FiSettings className='icon'/>
             
              </div>
          </div>
      </div>
   </div>
  );
};

export default Navbar;