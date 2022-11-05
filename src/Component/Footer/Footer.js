import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zuri from '../../Image/Zuri.png';
import I4G from '../../Image/I4G.png';

function Footer() {
  return (
    <div>
        <hr/>
        <div className="foot">
            <div className="zuri">
                 <img width={130} src={Zuri}/>
            </div>
            <div className="hng">
                 <span className="intern">HNG Internship 9 Frontend Task</span>
            </div>
                <div className="i4g">
            <img width={100} src={I4G}/>
            </div>
        </div>
    </div>
  )
}

export default Footer