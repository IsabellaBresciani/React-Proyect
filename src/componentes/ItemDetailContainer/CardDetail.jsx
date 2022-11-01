
import { useState } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import Loader from '../Loader/Loader'


export default function CardDetail({pintura}) {
    const[counter,setCounter] = useState(0)
    const {addtoCart} = useContext(cartContext)
    
    function onAddItem(counter){
        addtoCart(pintura,counter)
        setCounter(counter)
    }

    const detail = {
        width: "90%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "aliceblue",
        padding: "5%",
        gap: "7%"
    }
    const img = {
        width: "50%",
        height: "auto"
    }

    const info = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    if(pintura.title) 
    return (
        <>
            <FlexWrapper>
                <div style={detail}>
                        <img style={img} src={pintura.img} alt="pintura"/>
                        <div style={info}>  
                                <h4>{pintura.title}</h4>
                                <p>{pintura.author}</p>
                                <p>{pintura.country}</p>
                                <p>${pintura.price}</p> 
                                <p>medidas: {pintura.mesures}</p>  
                        </div>
                </div>
                {counter === 0? <ItemCounter onAddItem={onAddItem} stock={pintura.stock}/> : <Link to="/cart">Ya hay items agregados al carrito</Link>}
                
            </FlexWrapper>
        </>
        
    );
    return <FlexWrapper>
            <Loader size='100' speed='0.9' color='lightblue' />
        </FlexWrapper>
}
