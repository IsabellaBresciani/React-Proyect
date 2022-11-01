
import { useState } from "react";
import { createContext } from "react";


const cartContext = createContext()

function CartContextProvider(props){
    
    const [cart,setCart]=useState([])
    
    function addtoCart(pintura,counter){
        let id = pintura.id
        
        let condition = cart.find((element) => {
            return element.id === id
        })
        
        if (condition === undefined){
            let newCart = [...cart]
            let newItem = {...pintura,counter}
            newCart.push(newItem)
            setCart(newCart)
            console.log("entre en el true")
             
        }else{
            let index = cart.findIndex((element) => {
                return element.id === pintura.id;
             })
             cart[index].counter = cart[index].counter + counter 
             let newCart = [...cart]
             setCart(newCart)
        }
        
    } 

    function removeItem(idToRemove){
        let newCart = cart.filter((IteminCart)=>IteminCart.id !== idToRemove)
        setCart(newCart)
    }
   
    function clearCart(){
        setCart([]);
    }
    function getTotalItems(){
        let totalItems = 0
        if (cart !== undefined){
        cart.forEach(IteminCart => {
        totalItems += IteminCart.counter
        
        })
        return totalItems
        }else{
            return totalItems
        }
    }

    function getTotalPrice(cart){
        let totalPrice= 0
        if (cart !== undefined){
            cart.forEach(IteminCart => {
                totalPrice += (IteminCart.counter*IteminCart.price)
            })
            return totalPrice
        }
    }
    return(
        <>
            <cartContext.Provider value={{cart, clearCart, getTotalItems, addtoCart, getTotalPrice, removeItem}}>{props.children}</cartContext.Provider>
        </>
    )
}

export {cartContext,CartContextProvider}