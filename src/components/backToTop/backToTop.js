import React, { useState } from "react";
import './backToTop.scss';

const BackToTop = () => {
    const [show, setShow] = useState(false);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    })

    function backToTop() {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }

    return (
        <div className={show ? 'common-styles active' : 'common-styles de-active'} >
            <i className="material-icons" onClick={backToTop}>expand_less</i>
        </div >
    )
}

export default BackToTop;