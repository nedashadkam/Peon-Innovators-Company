import React from "react";
import './wasteItems.scss';
import WasteItem from "../wasteItem/wasteItem";
import glass from '../../assets/images/glass.jpeg';
import wood from '../../assets/images/wood.jpeg';
import paper from '../../assets/images/paper.jpeg';
import danger from '../../assets/images/danger.png';
import electronic from '../../assets/images/electronic.png';
import industrial from '../../assets/images/industrial.png';
import medical from '../../assets/images/medical.png';
import plastic from '../../assets/images/plastic.jpeg';
import image from '../../assets/images/a.png';
import food from '../../assets/images/food.png';


const WasteItems = () => {

    class Waste {
        constructor(id, title, iconName, unitPrice, imageAddress) {
            this.id = id;
            this.title = title;
            this.iconName = iconName;
            this.unitPrice = unitPrice;
            this.imageAddress = imageAddress;
        }
    }

    const wasteItemsList = [
        new Waste(1, 'شیشه' , 'science', 200, glass),
        new Waste(2, 'کاغذ و کارتن' , 'deployed_code', 200, paper),
        new Waste(3, 'پلاستیک' , 'water_bottle_large', 200, plastic),
        // new Waste(4, 'پارچه ای' , 'apparel', 200, ),
        new Waste(5, 'پزشکی' , 'vaccines', 200, medical),
        new Waste(6, 'الکترونیکی' , 'electrical_services', 200, electronic),
        new Waste(7, 'پسماند غذایی' , 'front_loader', 200, food),
        // new Waste(8, 'آهن' , 'iron', 200),
        new Waste(9, 'چوب' , 'forest', 200, wood),
        new Waste(10, 'خطرناک' , 'dangerous', 200, danger),
        // new Waste(11, 'ارگانیک' , '', 200),
        new Waste(12, 'صنعتی' , 'castle', 200, industrial),
        // new Waste(13, 'سایر' , 'more_horiz', 200, '' )
    ]
    return (
        <div className="waste-items-container">
            {
                wasteItemsList.map((item) => {
                    return <div className="waste-item-box" key={item.id}>
                        <WasteItem id={item.id} unitPrice={item.unitPrice} imageAddress={item.imageAddress} title={item.title} iconName={item.iconName} />
                    </div>
                })
            }
        </div>
    )
}

export default WasteItems;