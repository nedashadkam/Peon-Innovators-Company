import React, {useState} from "react";
import  './wasteItem.scss';

const WasteItem = (props) => {
    const [choice, setChoice] = useState(false)

    return (
        <div className="waste-item-container" onClick={()=>setChoice(!choice)}>
            <span style={choice ? {visibility:'visible'} : {visibility:'hidden'}} className="material-icons">check</span>
            <img src={props.imageAddress}  alt='waste-item-image'/>
            <label>{props.title}</label>
        </div>
    )
}

export default WasteItem;