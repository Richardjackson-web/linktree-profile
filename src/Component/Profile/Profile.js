import React from 'react';
import './Profile.css';
import Image from '../../Image/Profile_Image.jpg';
import Share from '../../Image/share.png';
import Mobile from '../../Image/mobile-share.png';

function Profile() {
  return (
    <div className="pro">
        <img className="share" src={Share}/>
        <img src={Mobile} className="mobile-share"/>
        <img id="profile__img" src={Image} />
        <h2 id="twitter">@i_am_richaard</h2>
        {/* <h2 id="slack">RichardJackson-web</h2> */}
    </div>
    
  )
}

export default Profile