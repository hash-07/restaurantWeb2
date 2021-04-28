import React from 'react'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import '../styles/HolidaySearch3.css'
import Header from './Header';
import HolidayS3 from '../cards/HolidayS3';
import beach from '../images/beach.jpg'


function HolidaySearch3() {
    return (
        <div>
            <Header/>
            <div className="header2">
            <div className="box1">
            <div className="goaDiv">
            <span className="goa">Goa Escape - Aldeia Santa Rita (Self Drive)</span>
            </div>

            <div className="location">
            <LocationOnIcon style={{ opacity: 0.4 }} />
            <span className="divar">Divar Island, Goa</span>
            </div>
            </div>

            <div className="box2">
            <div className="priceDiv">
                <span id="price" >Price</span>
            </div>
            <div className="rupeesDiv">
                <span id="rupees">4000/-INR</span>
            </div>
            <div className="percentDiv">
                <span id="percent">+200 (5%) Taxes</span>
            </div>
            </div>
            </div>

            <div className="middle">
                <label id="midText">Hotel</label>
                <label>Departure Dates</label>
                <label>Inclusions</label>
                <label>Itinery</label>
                <label>About Place</label>
            </div>

            <div className="big_box">
                <div className="flagDay">
                <div className="days">
                <label id="day">Day - 1</label>
                <label id="day">Day - 2</label>
                <label id="day">Day - 3</label>
                <label id="day">Day - 4</label>
                </div>

                <div className="flag">
                    <div className="flagUp"></div>
                    <div className="flagDown"></div>
                </div>
                </div>

                <div className="holidayS3">
                <HolidayS3/>
                </div>

                <div>
                <img src={beach} id="mainImg"/>
                </div>
            </div>



        </div>
    )
}

export default HolidaySearch3
