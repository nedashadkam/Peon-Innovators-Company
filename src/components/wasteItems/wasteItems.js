import React from "react";
import './wasteItems.scss';
import WasteItem from "../wasteItem/wasteItem";

const WasteItems = () => {
    const wasteItemsList = [
        {id: 1 , title : 'شیشه' , imageAddress : '' },
        {id: 2 , title : 'کاغذ و کارتن' , imageAddress : '' },
        {id: 3 , title : 'پلاستیک' , imageAddress : '' },
        {id: 4 , title : 'پارچه ای' , imageAddress : '' },
        {id: 5 , title : 'پزشکی' , imageAddress : '' },
        {id: 6 , title : 'الکترونیکی' , imageAddress : '' },
        {id: 7 , title : 'مس' , imageAddress : '' },
        {id: 8 , title : 'آهن' , imageAddress : '' },
        {id: 9 , title : 'چوب' , imageAddress : '' },
        {id: 10 , title : 'خطرناک' , imageAddress : '' },
        {id: 11 , title : 'ارگانیک' , imageAddress : '' },
        {id: 12 , title : 'صنعتی' , imageAddress : '' },
        {id: 13 , title : 'سایر' , imageAddress : '' },
    ]
    return (
        <div className="waste-items-container">
            {
                wasteItemsList.map((item) => {
                    return <div style={{width: '30%' , height: '100px', margin: '30px 0'}} key={item.id}>
                        <WasteItem imageAddress={item.imageAddress} title={item.title}/>
                    </div>
                })
            }
        </div>
    )
}

export default WasteItems;