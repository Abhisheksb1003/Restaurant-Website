import classes from './Headercartbutton.module.css';
import React from 'react';
import CartIcon from '../Cart/carticon';

const Headercartbutton=()=>{
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    )

}

export default Headercartbutton