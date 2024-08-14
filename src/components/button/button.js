import React from "react";
import './button.scss';
// import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button
            className='btn-style'
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;