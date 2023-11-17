import classes from './Headercartbutton.module.css';
import React from 'react';
import CartIcon from '../Cart/CartIcon';

const Headercartbutton=(props)=>{
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    )

}

export default Headercartbutton