import React, { Fragment } from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/Mealimage.jpg';
import Headercartbutton from "./Headercartbutton";



const Header=(props)=>{
   return (<Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <Headercartbutton />
           
            
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Food Image" />
        </div>
       
    </Fragment>)
}

export default Header