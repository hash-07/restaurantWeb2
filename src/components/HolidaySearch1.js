import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Slider from "@material-ui/core/Slider";
// import HolidayS1Card from "../cards/HolidayS1Card";
import HolidayS2Card from "../cards/HolidayS2Card";

function HolidaySearch1() {
 const classes = useStyles();
//  const [value, setValue] = useState(30);
 return (
  <div className={classes.mainContainer}>

      <div className={classes.headerContainer}>
      <div>
   <Header />
      </div>
   <div className={classes.headerContainer2}>
    <div className={classes.header1}>
     <SingleBedIcon />
     <h4>Panaji, Goa</h4>
     <div className={classes.vertical}></div>
    </div>

    <div className={classes.header}>
     <div>
      <h4 className={classes.text}>Check-In</h4>
      <h4 className={classes.text}>08, Mar'21</h4>
      <h4 className={classes.text2}>Monday</h4>
     </div>
     <div className={classes.vertical}></div>
    </div>

    <div className={classes.header}>
     <div>
      <h4 className={classes.text}>3</h4>
      <h4 className={classes.text2}>nights</h4>
     </div>
     <div className={classes.vertical}></div>
    </div>

    <div className={classes.header}>
     <div>
      <h4 className={classes.text}>Checkout</h4>
      <h4 className={classes.text}>11, March'21</h4>
      <h4 className={classes.text2}>Thursday</h4>
     </div>
     <div className={classes.vertical}></div>
    </div>

    <div className={classes.header}>
     <div>
      <h4 className={classes.text}>Travellers and room</h4>
      <h4 className={classes.text2}>3 travllers & 1 room</h4>
     </div>
     <div className={classes.vertical}></div>
    </div>
   </div>
   </div>

   <main className={classes.modifyMain}>
       <button className={classes.modify}>Modify Search</button>
   </main>

   {/* ------------------sidebar---------------------- */}
    <div className={classes.sidebarContainer}> 

   <div className={classes.sidebar}>
    <div
     style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "flex-start",
     }}
    >
     <main
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
     >
      <ArrowForwardIosIcon />
      <h4>City Name</h4>
     </main>

     <div style={{ display: "flex", alignItems: "center", margin : '0 10px 0 10px' }}>
      <input className={classes.input} placeholder="Search by city name" />
     </div>
     <div className={classes.underline}></div>

     <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
     >
      <div
       style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
       }}
      >
       <ArrowForwardIosIcon style={{ fontSize: "12px", marginTop: "-10px" }} />
       <span style={{ margin: "0 0 12px 5px" }}>Category</span>
      </div>

      <div className={classes.category}>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         margin: "5px 0 1px 0",
        }}
       >
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         marginBottom: "1px",
        }}
       >
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         marginBottom: "1px",
        }}
       >
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
       </div>
      </div>
     </main>

     <div className={classes.underline}></div>

     <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
     >
      <div
       style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
       }}
      >
       <ArrowForwardIosIcon style={{ fontSize: "12px", marginTop: "-10px" }} />
       <span style={{ margin: "0 0 12px 5px" }}>Price range</span>
      </div>

      <div className={classes.category}>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         margin: "5px 0 1px 0",
        }}
       >
        <input type="radio" id="male" name="select" value="male" />
        <label htmlFor="male">High to low</label>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         marginBottom: "1px",
        }}
       >
        <input type="radio" id="female" name="select" value="female" />
        <label htmlFor="female">Low to high</label>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         marginBottom: "1px",
        }}
       >
        <input type="radio" id="other" name="select" value="other" />
        <label htmlFor="other">below 10000</label>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         marginBottom: "1px",
        }}
       >
        <input type="radio" id="other" name="select" value="other" />
        <label htmlFor="other">10000 - 50000</label>
       </div>
      </div>
     </main>

     <div className={classes.underline}></div>
     <div>
      <div
       style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
       <ArrowForwardIosIcon style={{ fontSize: "12px", marginTop: "-10px" }} />
       <span style={{ margin: "0 0 12px 5px" }}>Bugdet</span>
      </div>

      <div className={classes.slider}>
       <Slider
        //  value={value} onChange={handleChange}
        aria-labelledby="continuous-slider"
       />
      </div>
     </div>

     <div className={classes.underline}></div>

     <div>
      <div
       style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
       <ArrowForwardIosIcon style={{ fontSize: "12px", marginTop: "-10px" }} />
       <span style={{ margin: "0 0 12px 5px" }}>Days</span>
      </div>
      <div className={classes.slider}>
       <Slider
        //  value={value} onChange={handleChange}
        aria-labelledby="continuous-slider"
       />
      </div>
     </div>

     <div className={classes.underline}></div>
    </div>
   </div>
   <div>
       <HolidayS2Card/>
   </div>
       
   </div>
  </div>
 );
}

export default HolidaySearch1;

const useStyles = makeStyles((theme) => ({
    mainContainer : {
        "@media (max-width: 711px)": {
            display : 'block'
            },
    },
    headerContainer : {
        display : 'flex',
        flexDirection : 'column',
        
    },
 headerContainer2: {
  marginTop : 'auto',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  border: "1px solid gray",
  borderRadius: "15px",
  borderColor: "#CCCCCC",
  boxShadow: "1px 1px 1px 1px #CCCCCC",
  margin: "0 10px 0 10px",
 },
 header1: {
  display: "flex",
  flexDirection: "row",
  // justifyContent : 'space-evenly',
  alignItems: "center",
 },
 vertical: {
  marginLeft: "90px",
  borderLeft: "1px solid black",
  height: "50px",
  opacity : 0.3
 },
 header: {
  display: "flex",
  flexDirection: "row",
  // justifyContent : 'space-evenly',
  alignItems: "center",
 },
 text: {
  marginBottom: "-25px",
  fontSize: "14px",
 },
 text2: {
  fontSize: "14px",
 },
 underline: {
  marginTop: 10,
  marginBottom: 10,
  fontSize: 22,
  textAlign: "center",
  width: "auto",
  height: 0.5,
  backgroundColor: "black",
  fontWeight: "bold",
 },
 sidebarContainer : {
     display : 'flex',
     flexDirection : 'row',
     "@media (max-width: 711px)": {
        display : 'block'
        }, 
 },
 sidebar: {
  border: "1px solid gray",
  height: "auto",
  width: "fit-content",
  borderRadius: "10px",
  "@media (max-width: 711px)": {
      alignSelf : 'center',
      alignItems : 'center'
    },
 },
 category: {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  margin: "-15px 0 0 10px",
 },
 slider: {
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
  margin: "0 2px 0 10px",
  width: "80%",
  marginTop: "-10px",
 },
 modifyMain : {
     display : 'flex',
    //  alignItems : 'flex-end'
    justifyContent : 'flex-end',
    margin : '5px 0px 12px 0px',
 },
 modify : {
     border : '1px solid lightgray',
     borderRadius : '10px',
     boxShadow : '1px 1px 1px 1px lightgray',
     margin : '7px 7px 0 0',
     padding : '5px 20px 5px 20px',
     outline : 'none',
    boxShadow : '1px 1px 3px #CCCCCC',
     cursor : 'pointer',
     "&:hover" : {
        //  color : 'white'
        fontWeight : '600'
     }
 },
 input : {
padding : '5px 5px 5px 10px',
// borderRadius : '5px'
 }
}));
