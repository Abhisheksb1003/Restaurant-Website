import { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartisshown,setcartisshown]=useState(false)

  const showcarthandler=()=>{
    setcartisshown(true);
  }

  const hidecarthandler=()=>{
    setcartisshown(false);
  }

  return (
    <Fragment>
      {cartisshown && <Cart onClose={hidecarthandler} />}
   <Header onshowcart={showcarthandler}/>
   <main>
    <Meals />
   </main>
   </Fragment>
  );
}

export default App;
