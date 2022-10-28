import React from 'react';
import './Link.css';

function Link() {
  return (
    <div>
        <div className="main-btn">
            <a href="https://twitter.com/i_am_richaard" className="link-button">Twitter Link</a> 
            <br /><br/><br/>
            <a href="https://training.zuri.team/" id="btn__zuri">
                Zuri Team 
            </a>
            <br /><br/><br/>
            <a href="http://books.zuri.team" id="books">
                Zuri Books
            </a>
            <br /><br/><br/>
            <a href="https://books.zuri.team/" id="book__python">
                Python Books
            </a>
            <br /><br/><br/>
            <a href="https://background.zuri.team/" id="pitch">
                Background Check for Coders
            </a>
            <br /><br/><br/>
            <a href="https://books.zuri.team/design-rules" id="book__design">
                Design Books
            </a>
        </div>
    </div>
  )
}

export default Link