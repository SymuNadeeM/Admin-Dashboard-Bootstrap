import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiMoreVertical } from 'react-icons/fi';
import './Featured.css';

// recharts  charts:


const Featured = () => {
  const percentage = 70;
  return (
    <>
      <div className="container featured_div">
        <div className="row">
           <div className="col-lg-5 featured_left">
            <div className="top">
               <h1 className='title' >Total Revenue</h1>
               <FiMoreVertical/>
            </div>
                 <div className="Fe_bottom">
                   <div className="featuredChart">
                     <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
                     <p className='title' >Total sales mode today</p>
                     <p className='amount' >$420</p>
                     <p className='desc'>Previous transactions processing.Last payments may not be included</p>
                  <div className="summary">
                     <div className="s_item">
                       <div className="itemTitle">Target</div>
                       <div className="itemResult">
                         <BsChevronDown className='itm_icon1'/>
                        <div className="resultAmount1">$12.4k</div>
                       </div>
                     </div>
                     <div className="s_item">
                       <div className="itemTitle">Last Week</div>
                       <div className="itemResult">
                         <BsChevronUp className='itm_icon2'/>
                        <div className="resultAmount">$12.4k</div>
                       </div>
                     </div>
                     <div className="s_item">
                       <div className="itemTitle">Last Month</div>
                       <div className="itemResult">
                         <BsChevronUp className='itm_icon3'/>
                        <div className="resultAmount">$12.4k</div>
                       </div>
                     </div>
                  </div>
                  
               
                </div>
           </div>
           <div className="col-lg-7">
                {/* <ReChart/> */}
           </div>
        </div>
      </div>
    </>
  );
};

export default Featured;