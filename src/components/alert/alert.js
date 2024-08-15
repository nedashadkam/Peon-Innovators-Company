import React from "react";
import './alert.scss';

const Alert = (props) => {
    return (
        <div className={props.alertStyle}>
            <p style={{ display: 'inline-block' }}>{props.text} </p>
            <span className='material-icons'>{props.iconName}</span>
        </div>
    )
}

export default Alert;