import React from "react";
import './wasteItems.scss';
import WasteItem from "../wasteItem/wasteItem";

const WasteItems = () => {

    const wasteItemsList = [
        {id: 1 , title : 'شیشه' ,iconName: 'science' ,unitPrice:200 },
        {id: 2 , title : 'کاغذ و کارتن' , iconName: 'deployed_code', unitPrice:100 },
        {id: 3 , title : 'پلاستیک' ,iconName: 'water_bottle_large' ,unitPrice:200 },
        {id: 4 , title : 'پارچه ای' ,iconName: 'apparel',unitPrice:200 },
        {id: 5 , title : 'پزشکی' , iconName: 'vaccines',unitPrice:200 },
        {id: 6 , title : 'الکترونیکی' , iconName: 'electrical_services',unitPrice:200 },
        {id: 7 , title : 'مس' , iconName: 'front_loader',unitPrice:200 },
        {id: 8 , title : 'آهن' , iconName: 'iron',unitPrice:200 },
        {id: 9 , title : 'چوب' , iconName: 'forest',unitPrice:200 },
        {id: 10 , title : 'خطرناک' , iconName: 'dangerous' ,unitPrice:200},
        {id: 11 , title : 'ارگانیک' ,iconName: '' ,unitPrice:200},
        {id: 12 , title : 'صنعتی' ,  iconName: 'castle',unitPrice:200},
        {id: 13 , title : 'سایر' , iconName: 'more_horiz' ,unitPrice:200},
    ]
    return (
        <div className="waste-items-container">
            {
                wasteItemsList.map((item) => {
                    return <div style={{width: '30%' , height: '100px', margin: '30px 0'}} key={item.id}>
                        <WasteItem id={item.id} unitPrice={item.unitPrice} imageAddress={item.imageAddress} title={item.title} iconName={item.iconName}/>
                    </div>
                })
            }
        </div>
    )
}

export default WasteItems;