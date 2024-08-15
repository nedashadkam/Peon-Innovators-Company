import React, { useState } from 'react';
import './homePage.scss';
import WasteItems from '../../components/wasteItems/wasteItems';
import BackToTop from '../../components/backToTop/backToTop';
import Button from '../../components/button/button';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Alert from '../../alert/alert';

const HomePage = (props) => {

    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState(false)

    function toContinue() {
        if (props.wastes?.length > 0) {
            navigate('/wasteList')
        }else{
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000)
        }
    }

    return (
        <>
            <main className='home-page-style'>
                <div className='container'>
                    <div>
                        <span className='line'></span>
                        <label className='label'>نوع پسماند را انتخاب کنید</label>
                        <span className='line'></span>
                    </div>
                    <WasteItems />
                </div>
                <Button btnStyle='btn-style' clicked={toContinue}>ادامه</Button>
                <BackToTop />
                {
                    showMessage ? <Alert alertStyle='message' iconName="warning" text='لطفا یک آیتم را انتخاب کنید'/>  : null
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