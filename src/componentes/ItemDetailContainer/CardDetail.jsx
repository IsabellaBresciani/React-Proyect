import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import ItemCounter from '../ItemCounter/ItemCounter'


export default function CardDetail({pintura}) {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades de la pintura: ${pintura.title}`)
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

    return (
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
            <ItemCounter onAdd={onAdd} stock={pintura.stock}/>
        </FlexWrapper>
    )
}
