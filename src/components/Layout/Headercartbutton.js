import classes from './Headercartbutton.module.css';
import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import cartcontext from '../../store/cartcontext';

const Headercartbutton=(props)=>{
    const cartCtx=useContext(cartcontext);
    let quantity=0
    cartCtx.items.forEach(item => {
        quantity=quantity+Number(item.quantity)
    });


    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    )

}

export default Headercartbutton