import React, {Fragment} from 'react';
import Mealssummary from './mealssummary';
import Availablemeals from './Availablemeals';

const Meals=()=>{
    return (<Fragment>
        <Mealssummary/>
        <Availablemeals />
    </Fragment>
    )
}

export default Meals;