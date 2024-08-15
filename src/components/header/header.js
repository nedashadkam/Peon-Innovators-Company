import React from "react";
import './header.scss';
import headerImage from '../../assets/images/header-image.jpg';

const Header = () => {
    return (
        <header>
            <img className='header-image' src={headerImage} alt='home-page-image' />
        </header>
    )
}

export default Header;