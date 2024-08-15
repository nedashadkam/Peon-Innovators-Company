import React, { useState } from 'react';
import './homePage.scss';
import WasteItems from '../../components/wasteItems/wasteItems';
import BackToTop from '../../components/backToTop/backToTop';
import Button from '../../components/button/button';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Alert from '../../components/alert/alert';

const HomePage = (props) => {

    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(null)

    function toContinue() {
        if (props.wastes?.length > 0) {
            navigate('/wasteList')
        } else {
            setShowMessage({ text: 'لطفا حداقل یک آیتم را انتخاب کنید', iconName: 'warning', styleClass: 'red' });
            setTimeout(() => setShowMessage(null), 2000)
        }
    }

    return (
        <>
            <main className='home-page-style'>
                <div className='container'>
                    <div>
                        <label className='label'>نوع پسماند را انتخاب کنید</label>
                    </div>
                    <WasteItems />
                </div>
                <Button btnStyle='btn-style contnue' clicked={toContinue}>ادامه</Button>
                <BackToTop />
                {
                    showMessage ? <Alert alertStyle={`message ${showMessage.styleClass}`} iconName={showMessage.iconName} text={showMessage.text} /> : null
                }
            </main>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        wastes: state.selectedWaste
    }
}

export default connect(mapStateToProps)(HomePage);