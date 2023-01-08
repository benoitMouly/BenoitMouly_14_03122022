import React from 'react';
import { NavLink } from "react-router-dom";
import logomini from '../assets/img/logomini.svg';

const Header = () => {
    return (
        <>
            <div className="header-container">
            <NavLink to="/" className="main-nav" >
                <div className="header-font">
                
                    <div className='header-font_img'>
                  
                <img
          
          src={logomini}
          alt="Wealth Health logo"
        />
        </div>
                    <h2>Hrnet.</h2>
               
                </div>
                </NavLink>
                <div className="menu-nav"><a href="/listing">View current Employees</a></div>
            </div>
        </>
    );
};

export default Header;