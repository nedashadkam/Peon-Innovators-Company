import React from "react";
import './button.scss';
// import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button
            className={props.btnStyle}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;