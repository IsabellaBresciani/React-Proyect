import { useState } from "react";
import { createContext } from "react";


const cartContext = createContext()

function CartContextProvider(props){
   
    const [cart,setCart]=useState([])
    function addtoCart(item,count){
        let newCart = [...cart]
        let newItem = {...item,count}
        newCart.push(newItem)
        setCart(newCart)
    }
    function getTotalItems(){
        let total = 0
        cart.forEach(IteminCart => {
            total += IteminCart.count
        })
        return total
    }
    
    return(
        <>
            <cartContext.Provider value={{cart, addtoCart, getTotalItems}}>{props.children}</cartContext.Provider>
        </>
    )
}

export {cartContext,CartContextProvider}