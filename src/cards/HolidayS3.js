import React from 'react'
import './cardStyles/HolidayS3.css'
import house from '../images/house.jpg'

function HolidayS3() {
    return (
        <div className="container">
            <div className="labels box1">
            <label id="text1">Hotel - Candolim Retreat</label>
            <label id="text1">Hotel Details</label>
            <label id="text2">Check Details</label>
            </div>

            <div>
                <img src={house} id="img"/>
            </div>
        </div>
    )
}

export default HolidayS3
