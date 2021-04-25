import React from "react";
import bedroom from "../images/bedroom.jpg";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function HolidayS1Card() {
 const c = useStyles();
 return (
  <>
   <div className={c.container2}>
    <div>
     <img alt="img here" className={c.img} src={bedroom} />
    </div>
    <div
    // style={{display : 'flex',flexDirection : 'column', justifyContent : 'space-around'}}
    >
     <div className={c.fourText}>
      <span className={c.goaEscape}>
       Goa escape - Aldeia Santa Rita (self drive)
      </span>
      <div className={c.anjuna}>
       <LocationOnIcon style={{ opacity: 0.4 }} />
       <span style={{ opacity: 0.4 }}>Anjuna Goa</span>
      </div>
      <div className={c.anjuna}>
       <span style={{ color: "blue", fontWeight: "700", textAlign : 'center'}}>1200/night</span>
      </div>
      <div className={c.anjuna}>
       <span>Details</span>
      </div>
     </div>

     <main className={c.three}>
      <div className={c.underline}></div>
      <div className={c.anjuna2}>
       <span>Hotel</span>
       <div className={c.vertical}></div>

       <span>Sightseeings</span>
       <div className={c.vertical}></div>

       <span>Transfer</span>
      </div>
      <div className={c.underline}></div>
     </main>
    </div>
    <div className={c.bookNowDiv}>
     <button className={c.bookNow}>Book now</button>
    </div>
   </div>
  </>
 );
}

export default HolidayS1Card;

const useStyles = makeStyles((theme) => ({
 container2: {
  margin: "20px",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  alignItems: "center",
  border: "1px solid gray",
  backgroundColor: "#EEEEEE",
  //   height : 'fit-content',
  //   blockSize: 'fit-content',
  //   height : '180px',
  // width : 'fit-content',
  borderRadius: "10px",
  borderColor: "white",
  boxShadow: "0 0 10px 0 gray",
  width: "80vw",
 },
 img: {
  //   marginTop: "40px",
  width: "130px",
  height: "180px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
 },
 fourText: {
     
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  margin: "0 0 -40px 40px",
 },
 anjuna: {
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
 },
 goaEscape: {
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
  fontWeight: "bold",
 },
 three: {
  //  marginTop : '40px',
  margin: "7px 0 5px 40px",
  // alignContent : 'flex-end'
  position: "relative",
  bottom: "-20px",
 },
 anjuna2: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  //   marginTop : '10px'
 },
 underline: {
  marginTop: 10,
  marginBottom: 10,
  fontSize: 22,
  textAlign: "center",
  width: "auto",
  height: 0.1,
  opacity: 0.3,
  backgroundColor: "black",
  fontWeight: "bold",
 },
 vertical: {
  borderLeft: "1px solid black",
  height: "auto",
 },
 bookNowDiv: {
  flex: 1,
 },
 bookNow: {
  display: "flex",
  alignSelf: "flex-end",
  borderRadius: "5px",
  borderColor: "lightgray",
  backgroundColor: "blue",
  color: "white",
  transform: "rotate(270deg)",
  padding: "10px 20px 10px 20px",
  position: "relative",
    //  right : '-400%',
     marginLeft : '400px'
 },
}));
