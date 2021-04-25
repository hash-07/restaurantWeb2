import React from 'react'
import swimming from '../images/swimming.webp'
import {makeStyles} from '@material-ui/core/styles'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import BathtubIcon from '@material-ui/icons/Bathtub';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import WifiIcon from '@material-ui/icons/Wifi';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


function HolidayS2Card() {
    const c = useStyles();
    return (
        <div className={c.container}>
            <div>
            <img alt="hello" className={c.img} src={swimming} />
            </div>


        <div className={c.textContent}>
            <div className={c.upperText}>
                <span className={c.mainText}>Mercure Goa Devaaya Retreat</span>
            </div>
            <div className={c.location}>
                <LocationOnIcon/>
                <span>Divar Island, Goa</span>
            </div>
            <div className={c.review}>
                <span style={{opacity : 0.6}}>Review</span>
                <div className={c.stars}>
                <span>4.9</span>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                <StarBorderIcon/>
                </div>
            </div>

            {/* ------------------ICONS--------------------------- */}

            <div className={c.icons}>
            <div >
                <DirectionsCarIcon className={c.icon}/>
                <span className={c.t}>Parking</span>
            </div>
            <div>
                <BathtubIcon className={c.icon}/>
                <span className={c.t}>Bath</span>
            </div>
            <div>
                <LocalBarIcon className={c.icon2}/>
                <span className={c.t2}>Bar</span>
            </div>
            <div >
                <WifiIcon className={c.icon2}/>
                <span className={c.t2}>Wifi</span>
            </div>
            <div>
                <FitnessCenterIcon className={c.icon2}/>
                <span className={c.t2}>Gym</span>
            </div>
            </div>
            
        </div>

        <div className={c.rightContent}>
            <div className={c.price}>
                <span >Price</span>
            </div>
            <div className={c.rupees}>
                <span >4000/-INR</span>
            </div>
            <div className={c.percent}>
                <span >+200 (5%) Taxes</span>
            </div>
            <div>
                <button className={c.selectRoom}>Select Room</button>
            </div>

        </div>
        </div>
    )
}

export default HolidayS2Card

const useStyles = makeStyles((theme) => ({
    container : {
        display : 'flex',
        justifyContent : 'space-between',
        border : '1px solid gray',
        borderRadius : '15px',
        borderColor : 'white',
        width : '80vw',
        alignSelf : 'flex-end',
        boxShadow : ' 2px 2px 5px gray',
        marginLeft : '10px',
        backgroundColor : '#F6F6F6',
        // "@media (max-width: 711px)": {
        //     display : 'block'
        //     },
    // marginLeft : '-5rem'

    },
    container2 : {
        display : 'flex',
        justifyContent : 'space-evenly'
    },
img : {
    width : '170px',
    height : '170px',
    borderRadius : '100px',
    margin : '5px'
},
textContent : {
    marginLeft : '-20rem',
    "@media (max-width: 1141px)": {
        marginLeft : '-10rem',
        },
    "@media (max-width: 935px)": {
        marginLeft : '-3rem',
        },
    "@media (max-width: 789px)": {
        marginLeft : '1rem',
        },
},
upperText : {
margin : '0px 0px 15px 10px'
},
mainText : {
    fontWeight : 'bold',
     fontSize : '20px',
     "@media (max-width: 789px)": {
     fontSize : '15px',
        },
},
location : {
    display : 'flex',
    alignItems : 'center',
margin : '0px 0px 15px 10px',
opacity : 0.5
},
review : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-around',
    margin : '0px 0px 15px 10px'
},
stars : {
    display : 'flex',
    alignItems : 'center'
},
icons : {
    display : 'flex',
    justifyContent : 'space-evenly'
},
icon : {
    display : 'flex',
    flexDirection : 'column',
    border : '1px solid gray',
    borderRadius : '7px',
    backgroundColor : '#EEEEEE',
    borderColor : '#EEEEEE',
    padding : '5px',
    fontSize :'18px',
    color : '#0530D6'
},
icon2 : {
    marginLeft : '6px',
    display : 'flex',
    flexDirection : 'column',
    border : '1px solid gray',
    borderRadius : '7px',
    backgroundColor : '#EEEEEE',
    borderColor : '#EEEEEE',
    padding : '5px',
    fontSize :'18px',
    color : '#0530D6',
},
t : {
    fontSize : '10px',
    // marginLeft : '3px'
    // textAlign : 'right'
},
t2 : {
    fontSize : '10px',
    marginLeft : '6px'
    // textAlign : 'right'
},
price : {
    textAlign : 'right',
    opacity : 0.5,
    margin : '20px 15px -2px 0px'
},
percent : {
    textAlign : 'right',
    opacity : 0.5,
    margin : '0px 15px -2px 0px'
},
rupees : {
    textAlign : 'right',
    fontWeight : '500',
    fontSize : '20px',
    margin : '0px 15px -2px 0px'
},
selectRoom : {
    border : '1px solid gray',
    backgroundColor : '#052088',
    borderRadius : '5px',
    borderColor : 'transparent',
    color : 'white',
    margin : '17px 1px 0 0',
    padding : '8px 4px 8px 4px',
    cursor : 'pointer',
    "&:hover" :{
        backgroundColor : 'white',
        color : 'black',
    borderColor : 'blue',

    }
},
// selectRoom : {
//     '&:hover' : {
//         backgroundColor : 'white',
//     }
// }
}))