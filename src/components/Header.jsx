import React from 'react';
import logomini from '../assets/img/logomini.svg';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="logo">
                <img
          className="main-nav-logo-image"
          src={logomini}
          alt="Wealth Health logo"
        />
                </div>
                <div className="header-font">Hrnet.</div>
                <div className="menu-nav">View current Employees</div>
            </div>
        </div>
    );
};

export default Header;