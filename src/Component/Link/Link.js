import React from 'react';
import './Link.css';

function Link() {
  return (
    <div>
        <div className="main-btn">
            <a className="link-button">Twitter Link</a> 
            <br /><br/>
            <a href="https://training.zuri.team/" id="btn__zuri" className="link-button">
                Zuri Team 
            </a>
            <br /><br/>
            <a href="http://books.zuri.team" id="books" className="link-button">
                Zuri Books
            </a>
            <br /><br/>
            <a href="https://books.zuri.team/" id="book__python" className="link-button">
                Python Books
            </a>
            <br /><br/>
            <a href="https://background.zuri.team/" id="pitch" className="link-button">
                Background Check for Coders
            </a>
            <br /><br/>
            <a href="https://books.zuri.team/design-rules" id="book__design" className="link-button">
                Design Books
            </a>
        </div>
    </div>
  )
}

export default Link