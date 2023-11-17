import cartcontext from "./cartcontext";
import { useState } from "react";

const Cartprovider=(props)=>{
    const [items,updateitems]=useState([]);

    const additemhandler=item=>{
        updateitems([...items,item]);
        console.log('inside additemhandler', cartcontext)
    };

    const removeitemhandler=id=>{};


    const cartContext={
        items: items,
        totalAmount:0,
        addItem:additemhandler,
        removeItem:removeitemhandler 
    }

    return <cartcontext.Provider value={cartContext}>
        {console.log('inside cartcontext.provider',cartcontext)}
        {props.children}
    </cartcontext.Provider>
}

export default Cartprovider;