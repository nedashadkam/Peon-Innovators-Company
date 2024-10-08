import React, { useState } from "react";
import './wasteList.scss';
import { connect } from "react-redux";
import { removeWaste } from '../../stateManagement/actions/selectedWasteActions';
import { saveTheFinalWasteList } from '../../stateManagement/actions/finalWasteListAction';
import Alert from "../../components/alert/alert";
import Button from '../../components/button/button';
import BackToTop from '../../components/backToTop/backToTop';

const MIN_WEIGHT = 1.00;

const WasteList = (props) => {

    const changeValue = 0.5
    let [wasteList, setWasteList] = useState(props.wastes);
    const [showMessage, setShowMessage] = useState(null);

    function removeItem(id) {
        props.removewaste(id)
        wasteList = wasteList.filter((item) => item.id != id);
        setWasteList([...wasteList]);
    }
    function changeWeight(item, index, value) {
        if (item.weight) {
            if (item.weight === 1 && value < 0) {
                setShowMessage({ text: 'وزن اقلام نمیتواند کمتر از یک کیلو گرم باشد', iconName: 'warning', styleClass: 'red' })
                setTimeout(() => setShowMessage(null), 2000)
            } else {
                item.weight = item.weight + value
            }
        } else {
            item.weight = MIN_WEIGHT
        }
        wasteList[index] = item;
        setWasteList([...wasteList]);
    }

    function save() {
        wasteList = wasteList.map((item) => ({ ...item, totalPrice: item.weight * item.unitPrice }))
        props.saveFinalWasteList(wasteList);
        setShowMessage({ text: 'ثبت با موفقیت انجام شد', iconName: 'check', styleClass: 'green' })
        setTimeout(() => setShowMessage(null), 2000)
    }

    return (
        <main className="waste-list-style" >
            <div>
                <label className='label'>مقدار پسماند را وارد کنید</label>
            </div>
            <div className="waste-list-container">
                {
                    wasteList.map((item, index) => {
                        return <div className='waste-item' key={item.id}>
                            <span>{item.title}</span>
                            <span>
                                <i onClick={() => changeWeight(item, index, +changeValue)} className="material-icons increase">add</i>
                                <span>{item.weight}</span>
                                <i onClick={() => changeWeight(item, index, -changeValue)} className="material-icons decrease" >remove</i>
                            </span>
                            <span>  {`  ${item.weight * item.unitPrice}تومان`} </span>
                            <span>
                                <i onClick={() => removeItem(item.id)} className="material-icons" >delete</i>
                            </span>
                        </div>
                    })
                }
            </div>
            <Button btnStyle='btn-style save' clicked={save} >ثبت</Button>
            <BackToTop />
            {
                showMessage ? <Alert alertStyle={`message ${showMessage.styleClass}`} iconName={showMessage.iconName} text={showMessage.text} /> : null
            }
        </main>
    )
}


const mapStateToProps = (state) => {
    return {
        wastes: state.selectedWaste.map((item) => ({ ...item, weight: MIN_WEIGHT })),
        finalWasteL: state.finalWasteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removewaste: (id) => dispatch(removeWaste(id)),
        saveFinalWasteList: (item) => dispatch(saveTheFinalWasteList(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WasteList);