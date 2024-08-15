import React, {useState} from "react";
import  './wasteItem.scss';
import { connect } from "react-redux";
import {addWaste , removeWaste} from '../../stateManagement/actions/selectedWasteActions';

const WasteItem = (props) => {
    const [isSelected, setIsSelected] = useState(false)

    const wasteSelection = () => {
        setIsSelected(!isSelected);

        if(!isSelected) {
        props.addwaste({
            id: props.id ,
            title: props.title ,
            unitPrice:props.unitPrice,
        })
       }else{
        props.removewaste(props.id)
       }

    }
    return (
        <div className="waste-item-container" onClick={wasteSelection}>
            <span style={isSelected ? {visibility:'visible'} : {visibility:'hidden'}} className="material-icons">check</span>
            {/* <img src={props.imageAddress}  alt='waste-item-image'/> */}
            <i style={{color:'blue'}} className="material-icons" >{props.iconName}</i>
            <label>{props.title}</label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wastes: state.selectedWaste
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removewaste: (id) => dispatch(removeWaste(id)),
        addwaste: (item) => dispatch(addWaste(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( WasteItem);