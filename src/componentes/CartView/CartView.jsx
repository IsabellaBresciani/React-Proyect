import React,{useContext} from 'react'
import { cartContext } from '../../Context/cartContext'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import { createOrder } from '../../servicios/firebase'


export default function CartView() {
  const {cart} = useContext(cartContext)
  const {getTotalPrice, removeItem, clearCart} = useContext(cartContext)
  function handleCkeckout(){
    const client = {
      name: "Isabella Bresciani",
      mail: "jdajdjdj@gmail.com",
      phone: "1123456789"
    }
    const total = getTotalPrice(cart)
    const order = {
      client: client, 
      cart: cart, 
      total: total, 
      date: new Date()
    }
    createOrder(order)
  }
  return (
    <>
    <FlexWrapper>
    {
            cart.map((pintura)=>{
            return <div key={pintura.id}>
                    <h2>{pintura.title}</h2>
                    <h4>${pintura.price}</h4>
                    <h4>{pintura.counter}</h4>
                    <h4>Precio total: ${pintura.price*pintura.counter}</h4>
                    <button onClick={()=>{removeItem(pintura.id)}}>Eliminar productos</button>
                </div>
            
        })}
        
        
    </FlexWrapper>
    <FlexWrapper>
        <h3>El total de la compra es: ${getTotalPrice(cart)}</h3>
        <button onClick={()=>{clearCart()}}>Eliminar todos los productos</button>
        <button onClick={handleCkeckout}>Finalizar compra</button>
    </FlexWrapper>
    </>
  )
}
