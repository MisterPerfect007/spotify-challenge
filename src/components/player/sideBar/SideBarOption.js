import React from 'react';
import '../../../styles/player/sideBar/SideBarOption.css';


function SideBarOption({ Icon, CustomIcon, title }) {
    return (
        <div className="sideBarOption">
            {
                Icon? <div className="sideBarOption__icon">
                    <Icon />
                </div> : CustomIcon
            }
            <h5>{title}</h5>
        </div>
    )
}

export default SideBarOption
