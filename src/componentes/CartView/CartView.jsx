import React,{useContext} from 'react'
import { cartContext } from '../../Context/cartContext'
import FlexWrapper from '../FlexWrapper/FlexWrapper'


export default function CartView() {
  const {cart} = useContext(cartContext)
  const {getTotalPrice, removeItem, clearCart} = useContext(cartContext)
  
  return (
    <>
    <FlexWrapper>
    {
            cart.map((pintura)=>{
            return <div>
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
    </FlexWrapper>
    </>
  )
}
