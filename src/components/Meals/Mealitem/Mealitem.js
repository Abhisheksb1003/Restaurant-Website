import classes from './Mealitem.module.css';
import Mealitemform from './Mealitemform';
import React from 'react';

const Mealitem=(props)=>{
    const price=`$${props.price.toFixed(2)}`;

return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3>
        <div>{props.id}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
            {console.log(props)}
<Mealitemform id={props.id} item={props}/>
        </div>
    </li>
)
}

export default Mealitem