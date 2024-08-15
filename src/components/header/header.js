import React from "react";
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <i className='material-icons recycling' >recycling</i>
                <span className="title"> بازآوری بازگردانی بازیافت</span>
            </div>
        </header>
    )
}

export default Header;