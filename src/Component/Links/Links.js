import React from 'react';
import './Link.css';
import {Outlet, Link} from 'react-router-dom';

function Links() {
  return (
    <div>
        <div className="main-btn">
            <a href="https://twitter.com/i_am_richaard" className="link-button">Twitter Link</a> 
            <br /><br/><br/>
            <a href="https://training.zuri.team/" id="btn__zuri">
                Zuri Team 
            </a>
            <br /><br/><br/>
            <a href="http://books.zuri.team" id="books" title="This is where you will find books about design and coding.">
                Zuri Books
            </a>
            <br /><br/><br/>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=RichardJackson-web" id="book__python" title="Have issues understanding python? Let's help you get it by the tail.">
                Python Books
            </a>
            <br /><br/><br/>
            <a href="https://background.zuri.team/" id="pitch" title="When hiring a coder for a job you need to know who it is exactly you are hiring. Do a background check here.">
                Background Check for Coders
            </a>
            <br /><br/><br/>
            <a href="https://books.zuri.team/design-rules" id="book__design" title="It's one thing to design and another to make appealing designs. Check out this rule book.">
                Design Books
            </a>
            <br /><br/><br/>
            <Link className="con" to="/contact"><a id="contact">Contact Me</a></Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Links