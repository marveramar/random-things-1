import React from 'react';
import logo from '../stylesheet/Brewdog-Logo.jpg';

const Header = () => {
    return <div className="header">
        <img className="header_logo" src={logo} alt="logo" />
        <h1 className="header_title">PUNK BEER......BROWSER</h1>
    </div>
};
export default Header;