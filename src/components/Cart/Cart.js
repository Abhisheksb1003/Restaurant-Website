import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartcontext from '../../store/cartcontext';

const Cart=(props)=>{
    const cartctx=useContext(cartcontext);
    let totalAmount=0
    cartctx.items.forEach(item=>{
        totalAmount=totalAmount+(item.price*item.quantity)
    })
    
    const onAdd=(item)=>{
        console.log(item);
        cartctx.addquantity(item.id)
    }

    const onremove=(item)=>{
        if(item.quantity<=1){
            cartctx.removeItem(item.id)
        }else{
            cartctx.minusquantity(item.id)
        }
    }
    
    
    const cartitems=(
    <ul className={classes['cart-items']}>
        {cartctx.items.map((item)=>(
            <li className={classes.cart}>
                <div>
                    <h3>{item.name}</h3>
                    <div className={classes.quantity}>Quantity:{item.quantity}</div>
                    <div className={classes.price}>{item.price}</div>
                </div>
                <div className={classes.actions}>
                    <button onClick={()=>onremove(item)}>-</button>
                    <button onClick={()=>onAdd(item)}>+</button>
                </div>
            </li>
        ))}
</ul>
    );

return (
    <Modal onClose={props.onHideCart}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>
            Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>

)
}
export default Cart;