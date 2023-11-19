import cartcontext from "./cartcontext";
import { useState } from "react";
import Cart from "../components/Cart/Cart";

const Cartprovider=(props)=>{
    const [items,updateitems]=useState([]);

    const additemhandler=(item)=>{
        const exitstingitem=items.findIndex((cartItem)=>cartItem.id===item.id)
    

    if (exitstingitem!==-1){
        const updateItems=[...items];
        updateItems[exitstingitem].quantity=Number(updateItems[exitstingitem].quantity)+Number(item.quantity)
    

    updateitems(updateitems);
}
else
{
    updateitems((prevItems)=>[...prevItems,item]);
}
}

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