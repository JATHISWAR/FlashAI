import './Header.css';
import React from 'react';

function Header() {
    return (
        <div className="header">
        <img
          className="header_logo"
          src="https://www.kindpng.com/picc/m/25-254720_flash-cards-flashcard-clipart-black-and-white-hd.png"/>
        <div className="header_title">
            <h1>FlashAI - Your GRE Helper</h1>
        </div>
        <div className="header_about">
            <span>About</span>
        </div>
        <div className="header_wordlist">
            <span>Wordlist</span>
        </div>
        <div className="header_paper">
            <span>Paper Pattern</span>
        </div>
        <div className="header_eligibility">
            <span>Eligibility</span>
        </div>
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
