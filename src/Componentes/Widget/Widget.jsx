import React from 'react';
import { AiOutlineDollarCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsChevronDown } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import './Widget.css';

const Widget = () => {
  return (
    <div className='container'>
       <div className="row mt-3">
          <div className="col-lg-3 single_part">
             <div className="title_part">
               <h5>USERS</h5>
                 <div className="arror">
                  <BsChevronDown/> +5%
                 </div>
             </div>
             <div className="count_part"><h2>270</h2></div>
             <div className="last_part">
              <p>See all Users</p>
               <div className="wid_icons">
               <FaUserAlt className='wid_icon1'/>
               </div>
             </div>
          </div>
          <div className="col-lg-3 single_part">
             <div className="title_part">
               <h5>ORDERS</h5>
                 <div className="arror">
                  <BsChevronDown/> +2%
                 </div>
             </div>
             <div className="count_part"><h2>210</h2></div>
             <div className="last_part">
              <p>View all orders</p>
               <div className="wid_icons">
               <AiOutlineShoppingCart className='wid_icon2'/>
               </div>
             </div>
          </div>
          <div className="col-lg-3 single_part">
             <div className="title_part">
               <h5>EARNINGS</h5>
                 <div className="arror">
                  <BsChevronDown/> +12%
                 </div>
             </div>
             <div className="count_part"><h2>$4.25k</h2></div>
             <div className="last_part">
              <p>See all Earning</p>
               <div className="wid_icons">
               <AiOutlineDollarCircle className='wid_icon3'/>
               </div>
             </div>
          </div>
          <div className="col-lg-3 single_part">
             <div className="title_part">
               <h5>MY BALANCE</h5>
                 <div className="arror">
                  <BsChevronDown/> +5%
                 </div>
             </div>
             <div className="count_part"><h2>$7.85k</h2></div>
             <div className="last_part">
              <p>See Details</p>
               <div className="wid_icons">
               <MdOutlineAccountBalanceWallet className='wid_icon4'/>
               </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Widget;