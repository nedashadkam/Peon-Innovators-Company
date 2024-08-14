import React from 'react';
import './homePage.scss';
import WasteItems from '../../components/wasteItems/wasteItems';
import BackToTop from '../../components/backToTop/backToTop';
import Button from '../../components/button/button';
import homePageImage from '../../assets/images/home-page-image.jpg'

const HomePage = () => {
    return (
        <>
        <main>
                <img className='home-page-image' src={homePageImage} alt='home-page-image' />
                <div className='container'> 
                    <div>
                        <span className='line'></span>
                        <label className='label'>نوع پسماند را انتخاب کنید</label>
                        <span className='line'></span>
                    </div>
                    <WasteItems />
                </div>
                <Button>ادامه</Button>
                <BackToTop />
        </main>
        </>
    )
}

export default HomePage;