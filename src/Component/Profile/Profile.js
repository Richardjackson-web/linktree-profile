import React from 'react';
import './Profile.css';
import Image from '../../Image/Profile_Image.jpg';

function Profile() {
  return (
    <div>
        <img id="profile__img" src={Image} />
        <h2 id="twitter">@i_am_richaard</h2>
        {/* <h2 id="slack">RichardJackson-web</h2> */}
    </div>
  )
}

export default Profile