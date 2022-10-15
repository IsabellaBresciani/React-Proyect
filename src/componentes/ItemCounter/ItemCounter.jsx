import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'

const ItemCounter = ({onAddItem,stock}) => {
    const [counter,setCounter]=useState(1)

    const plus = ()=>{
        if (counter<stock){
            setCounter(counter+1)
        }
    }
    const onSubstract= ()=>{
        if (counter>1){
            setCounter(counter-1)
        }
    }
    
  return (
        <>
        <div>
            <Button onClick={onSubstract} text="-" /> 

            <span>
                {counter}
            </span>
            <Button onClick={plus} text="+" />

        </div>
        <>
        <Button onClick={()=> {onAddItem(counter)}} text="Agregar al carrito"/>
        </>
    </>

  )
}

export default ItemCounter