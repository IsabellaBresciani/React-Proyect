import React from 'react'
import { useState } from 'react'

const ItemCounter = ({onAdd,stock}) => {
    const [counter,setCounter]=useState(1)

    const sumar= ()=>{
        if (counter<stock){
            setCounter(counter+1)
        }
    }
    const restar= ()=>{
        if (counter>1){
            setCounter(counter-1)
        }
    }
  return (
        <>
        <div>
            <button onClick={restar}>
                -
            </button>
            <span>
                {counter}
            </span>
            <button onClick={sumar}>
                +
            </button>
        </div>
        <>
        <button onClick={()=> onAdd(counter)}>Agregar al carrito</button>
        </>
    </>

  )
}

export default ItemCounter