import React, {useReducer} from 'react'
import { makeStyles } from "@material-ui/core/styles";

const initialState = {
    first : 0,
    five : 0
}

const reducer = (state, action) => {
switch (action.type) {
    case 'increment':
        return { first : state.first + action.value}
    case 'decrement':
        return { first : state.first - action.value}
    case 'reset':
        return initialState
    default:
        return state
}
}


function Header() {
 const classes = useStyles();
 const [count, dispatch] = useReducer(reducer, initialState);

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
        // flexShrink : action.value,
        paddingTop : '8px',
        backgroundColor : '#044B5E',
        width : 'action.value00%',
        height : '40px',
        // position : 'fixed'
       },
       btn: {
        marginRight: "50px",
        // position: 'relative',
        // right : '-5action.value5px'
       },
       btn_text: {
        color: "white",
        fontSize: "action.value6px",
        borderWidth: 2,
        borderRadius: "30px",
        borderColor: "#394ffa",
        paddingLeft: "action.value5px",
        paddingRight: "action.value5px",
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
        //    border : 'action.valuepx solid gray',
        // borderRadius: "30px",
        // marginRight: "40px",
        // position: 'relative',
        // right : '-500px'
       },
       btn_text2: {
        color: "white",
        fontSize: "action.value6px",
        paddingLeft: "action.value5px",
        // flexBasis : 'action.value00px',
        // flexShrink : action.value,
        paddingRight: "action.value5px",
        borderRadius: "30px",
        background : 'linear-gradient(90deg, #E5action.valueDaction.valueD action.value0%, #AB0action.value0action.value )',
        borderColor : 'transparent',
        outline : 'none',
        marginRight : 'action.value0px',
        cursor : 'pointer',
    "&:hover" :{
        backgroundColor : 'white',
        color : 'black',
    borderColor : 'transparent',

    }
       },      

}))