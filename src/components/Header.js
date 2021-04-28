import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { CardHeader } from '@material-ui/core';
import { AppBar } from '@material-ui/core';


function Header() {
 const classes = useStyles();

    return (
     <div>
     <div className={classes.btn_container}>
     <div className={classes.btn}>
      <button className={classes.btn_text}>Home</button>
     </div>
     <div className={classes.btn}>
      <button className={classes.btn_text}>Support</button>
     </div>
     <div className={classes.btn}>
      <button className={classes.btn_text}>Offers</button>
     </div>
     <div className={classes.btn}>
      <button className={classes.btn_text}>Account</button>
     </div>
     <div className={classes.login}>
      <button className={classes.btn_text2}>Login / Register</button>
     </div>
    </div>
        </div>
    )
}

export default Header

const useStyles = makeStyles((theme) => ({
    btn_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent : 'flex-end',
        // alignItems : 'flex-end',
        // alignContent : 'flex-end',
        // alignSelf : 'flex-end',
        // flexShrink : 1,
        paddingTop : '8px',
        backgroundColor : '#044B5E',
        width : '100%',
        height : '40px',
        // position : 'fixed'
       },
       btn: {
        marginRight: "50px",
        // position: 'relative',
        // right : '-515px'
       },
       btn_text: {
        color: "white",
        fontSize: "16px",
        borderWidth: 2,
        borderRadius: "30px",
        flexShrink : 1,
        borderColor: "#394ffa",
        paddingLeft: "15px",
        paddingRight: "15px",
        backgroundColor: "#3d69a2",
        outline : 'none',
        cursor : 'pointer',
    "&:hover" :{
        backgroundColor : 'white',
        color : 'black',
    borderColor : 'blue',

    }
       },
       login: {
        // marginRight: "40px",
        // position: 'relative',
        // right : '-500px'
       },
       btn_text2: {
        color: "white",
        fontSize: "16px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "30px",
        backgroundColor: "red",
        background : 'linear-gradient(90deg, #E51D1D 10%, #AB0101 )',
        border : 'transparent',
        outline : 'none',
        cursor : 'pointer',
    "&:hover" :{
        backgroundColor : 'white',
        color : 'black',
    borderColor : 'transparent',

    }
       },      

}))