import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Cartprovider from "./store/Cartprovider";

function App() {
  const [cartisshown,setcartisshown]=useState(false)

  const showcarthandler=()=>{
    setcartisshown(true);
  }

  const hidecarthandler=()=>{
    setcartisshown(false);
  }

  return (
    <Cartprovider>
      {cartisshown && <Cart onClose={hidecarthandler} />}
   <Header onshowcart={showcarthandler}/>
   <main>
    <Meals />
   </main>
   </Cartprovider>
  );
}

export default App;
