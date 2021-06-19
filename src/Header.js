import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
        <img
          className="header_logo"
          src="https://www.kindpng.com/picc/m/25-254720_flash-cards-flashcard-clipart-black-and-white-hd.png"/>
        </Link>
        <div className="header_title">
            <h1>FlashAI - Your GRE Helper</h1>
        </div>
        <Link to="/about">
        <div className="header_about">
            <span>About</span>
        </div>
        </Link>
        <div className="header_wordlist">
            <span>Wordlist</span>
        </div>
        <Link to="/paper_pattern">
        <div className="header_paper">
            <span>Paper Pattern</span>
        </div>
        </Link>
        <Link to="/eligibility">
        <div className="header_eligibility">
            <span>Eligibility</span>
        </div>
        </Link>
        <div className="header_nav">
            <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
            </div>
     </div>
    </div>
        
    )
}

export default Header
