import React, {useContext} from 'react';
import classes from './Mealitemform.module.css';
import Input from '../../UI/Input';
import cartcontext from '../../../store/cartcontext';

const Mealitemform =(props)=>{
    const cartctx=useContext(cartcontext)
    console.log('reintilized cartctx',cartctx)

    const additemtocart=(event)=>{
        event.preventDefault();
        const quantity=document.getElementById("amount_"+props.id).value
        cartctx.addItem({...props.item,quantity:quantity})
        console.log('after additemtocart',cartctx)
    }

    return (
        <form className={classes.form}>
            <div>
                {console.log('inside rendor',cartctx.items)}
            <Input label="Amount" input={{
                id:'amount_'+props.id,
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:'1'
            }} />
            </div>
            <div>
            <button onClick={additemtocart}>+ ADD</button>
            </div>
        </form>
    )

}

export default Mealitemform