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

    const removeitemhandler=(id)=>{
        const removeItem=items.filter((cartitems)=>cartitems.id!==id);
        updateitems(removeItem);
    };

    const addquantitycarthandler=(id)=>{
        const updatequantity=items.map((cartitems)=>{
            if(cartitems.id===id){
                let update=Number(cartitems.quantity);
                return {...cartitems,quantity:update+1}
            }
            return cartitems;
        })
        updateitems(updatequantity)
    }

    const minusquantitycarthandle=(id)=>{
        const minusquantity=items.map((cartitems)=>{
            if(cartitems.id===id){
                let minusquantity=Number(cartitems.quantity);;
                return {...cartitems,quantity:minusquantity -1}
            }
            return cartitems;
        })
        updateitems(minusquantity)
    }


    const cartContext={
        items: items,
        totalAmount:0,
        addItem:additemhandler,
        removeItem:removeitemhandler ,
        addquantity:addquantitycarthandler,
        minusquantity:minusquantitycarthandle
    }

    return <cartcontext.Provider value={cartContext}>
        {console.log('inside cartcontext.provider',cartcontext)}
        {props.children}
    </cartcontext.Provider>
}

export default Cartprovider;