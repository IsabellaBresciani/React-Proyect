import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'

export default function CardDetail(pintura) {
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
                    <img style={img} src={pintura.props.img} alt="pintura"/>
                    <div style={info}>  
                            <h4>{pintura.props.title}</h4>
                            <p>{pintura.props.author}</p>
                            <p>{pintura.props.country}</p>
                            <p>${pintura.props.price}</p> 
                            <p>medidas: {pintura.props.mesures}</p>  
                    </div>
            </div>
        </FlexWrapper>
    )
}
