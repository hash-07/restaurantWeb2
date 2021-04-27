import React, { useState } from "react";
// import logo from "../images/logo.png";
import hotels from "../images/hotels.png";
import holidays from "../images/holidays.png";
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import beach from '../images/beach.jpg'
import house from '../images/house.jpg'
import tree from '../images/tree.jpg'
import road from '../images/road.jpg'
import Header from "./Header";

function Holiday() {
 const classes = useStyles();
 const [startDate, setStartDate] = useState(new Date());

 return (
  <div>    
   <div className={classes.container}>
       <div style={{backgroundColor : '#044B5E'}}>
    <div>

       <Header/>
    </div>
    <div className={classes.container2}>
     <div className={classes.twoImg}>
      <div>
       <img alt="hotels" className={classes.hotels} src={hotels} />
      </div>
      <div>
       <img alt="holidays" className={classes.holidays} src={holidays} />
      </div>
     </div>

     <div className={classes.searchContainer}>
      <h3 style={{ marginTop: "20px", fontSize: "25px" }}>
       Book Your Domestic Hotel
      </h3>
      <div className={classes.underline} />
      <main className={classes.searchContainer2}>
       <div className={classes.searchSub}>
        <div style={{ display: "flex", flexDirection: "column" }}>
         <h5 style={{ textAlign: "left", marginBottom: "-10px" }}>
          Enter your destination
         </h5>
         <h2 style={{ textAlign: "left", marginBottom: "-10px" }}>Panaji</h2>
         <h5 style={{ textAlign: "left" }}>Goa</h5>
        </div>
        <AddOutlinedIcon style={{ fontSize: "30px", marginRight: "-10px" }} />
        <div className={classes.vertical}></div>
       </div>

       <div className={classes.searchSub}>
        <div style={{ display: "flex", flexDirection: "column" }}>
         <div style={{ display: "initial", flexDirection: "row" }}>
          <DatePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           dateFormat="Pp"
           style={{ marginBottom: "-10px" }}
          />
         </div>
         <h4 style={{ marginTop: "10px" }}>March 08</h4>
        </div>
        <div className={classes.vertical}></div>
       </div>

       <div className={classes.searchSub}>
        <div style={{ display: "flex", flexDirection: "column" }}>
         <div style={{ display: "initial", flexDirection: "row" }}>
          <DatePicker
           selected={startDate}
           onChange={(date) => setStartDate(date)}
           dateFormat="Pp"
          />
         </div>
         <h4>nights 3</h4>
        </div>
        <div className={classes.vertical}></div>
       </div>

       <div className={classes.searchSub2}>
        <h1 style={{ marginBottom: "-10px" }}>Adult & child</h1>
        <h4>3 travellers one room</h4>
       </div>
      </main>
      <div className={classes.underline2} />
      <div className={classes.searchBtn}>
       <button className={classes.searchText}>Search</button>
      </div>
     </div>


    </div>
    </div>
   

    <div className={classes.photosMain}>
    <h4 style={{ textAlign: "left", margin: "5px 0 15px 10px" }}>
     Best Packages We Recommend
    </h4>
   <div className={classes.photos}>
    <div>
        <img alt="images" className={classes.img} src={beach} />
        <h4 style={{marginTop : '-5px'}}>Package Name</h4>
        <h4 style={{marginTop : '-20px'}} >Package Price</h4>
    </div>
    <div>
        <img alt="images" className={classes.img} src={house} />
        <h4 style={{marginTop : '-5px'}}>Package Name</h4>
        <h4 style={{marginTop : '-20px'}} >Package Price</h4>
    </div>
    <div>
        <img alt="images" className={classes.img} src={tree} />
        <h4 style={{marginTop : '-5px'}}>Package Name</h4>
        <h4 style={{marginTop : '-20px'}} >Package Price</h4>
    </div>
    <div>
        <img alt="images" className={classes.img} src={road} />
        <h4 style={{marginTop : '-5px'}}>Package Name</h4>
        <h4 style={{marginTop : '-20px'}} >Package Price</h4>
    </div>
   </div>
   </div>
   </div>
  </div>
 );
}

export default Holiday;

const useStyles = makeStyles((theme) => ({
 root: {
  "& > *": {
   margin: theme.spacing(1),
  },
 },
 container: {
     display:'flex',
     flexDirection:'column',
    //  alignItems : 'center'

//   height : '30px'
//   marginBottom : '-30px'
    // height: "100%",
 },
 container2: {
    // display : 'flex',
    // alignItems : 'flex-start',
    position: "relative",
    marginTop : '-50px',
    // top: "-54px",
    // backgroundColor: '#044B5E',
    minHeight : '65vh'
    // width : 'fit-content'
    //  marginBottom : '-20px'
   },
   photosMain : {
    // marginTop : '100px'
},
 login: {
    marginRight: "40px",
    position: 'relative',
    right : '-515px'
   },
 btn_text2: {
  color: "white",
  fontSize: "16px",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRadius: "30px",
  backgroundColor: "red",
 },
 twoImg: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: "30px",
 },
 hotels: {
  position: "absolute",
  top: "90px",
  left: "510px",
  zIndex: 1,
  width: "100px",
  height: "60px",
  borderRadius: 15,
  boxShadow: "1px 1px 1px 1px #CCCCCC",
  "@media (max-width: 1220px)": {
  position: "absolute",
  left: "400px",
  },
 },
 holidays: {
  position: "absolute",
  top: "90px",
  right: "510px",
  zIndex: 1,
  width: "100px",
  height: "60px",
  borderRadius: 15,
  boxShadow: "1px 1px 1px 1px #CCCCCC",
  "@media (max-width: 1220px)": {
    position: "absolute",
    right: "400px",
    },
 },
 underline: {
  marginTop: 10,
  marginBottom: "-15px",
  // fontSize: 22,
  // textAlign: 'center',
  // width: 'auto',
  height: 1,
  backgroundColor: "black",
  // fontWeight: 'bold',
 },
 underline2: {
  marginTop: "-17px",
  //   marginBottom: 10,
  height: 1,
  backgroundColor: "black",
  marginBottom: "10px",
 },
 searchBtn: {
  display: "flex",
  justifyContent: "flex-end",
  margin: "0 10px 15px 0px",
 },
 searchText: {
  color: "white",
  fontSize: "16px",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRadius: "5px",
  background : 'linear-gradient(90deg, #E51D1D 10%, #AB0101 )',
  borderColor : 'transparent',
  fontWeight: "bold",
  outline : 'none',
  cursor : 'pointer',
  "&:hover" :{
      backgroundColor : 'white',
      color : 'black',
  borderColor : 'lightgray',

  }

  // margin : '5px 10px 5px 10px'
 },

photos : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    // marginTop : '300px'
},
img : {
    width : '200px',
    height : '115px',
    borderRadius : '15px'
},
 searchContainer: {
  zIndex: 0,
  border: "2px solid red",
  borderColor: "#CCCCCC",
  borderRadius: 15,
//   marginTop: "5px",
  marginTop: "100px",
  marginRight: "70px",
  marginLeft: "70px",
  backgroundColor: "white",
 },
 searchContainer2: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  alignSelf: "center",
 },
 searchSub: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
 },
 searchSub2: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
 },
 vertical: {
  marginLeft: "90px",
  borderLeft: "1px solid black",
  height: "100px",
  // marginTop: 10,
  // marginBottom: 10,
  // fontSize: 22,
  // textAlign: 'center',
  // width: 1,
  // height: 10,
  // backgroundColor: "black",
  // fontWeight: 'bold',
 },


//   -----------------------MEDIA QUERIES----------------------

// hotels: {
//     "@media (max-width: 1220px) and (min-width : 1221px)": {
//         position: "absolute",
//     top: "90px",
//     left: "510px",
//     zIndex: 1,
//     width: "100px",
//     height: "60px",
//     borderRadius: 15,
//     boxShadow: "1px 1px 1px 1px #CCCCCC",
//       marginLeft: "380px",
//       },
//    },
//    holidays: {
//     "@media (max-width: 1220px)": {
//         position: "absolute",
//         //   marginTop: "100px",
//     top: "90px",
//     right: "510px",
//     zIndex: 1,
//     width: "100px",
//     height: "60px",
//     borderRadius: 15,
//     boxShadow: "1px 1px 1px 1px #CCCCCC",
//       },
//    },
// "@media (max-width: 767px)": {
//     textAlign: "center",
//     backgroundColor: "green"
//   },
}));
