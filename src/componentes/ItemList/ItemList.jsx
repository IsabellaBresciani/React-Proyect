
import React, {useState,useEffect} from 'react'
import {getArt} from "../../mockAPI/mockAPI.js"
import FlexWrapper from '../FlexWrapper/FlexWrapper.jsx'
import Card from "../card/Card"
export default function ItemList() {
    const [PinturaList,setPinturaList] = useState([]);
    useEffect(()=>{
        getArt().then((respuesta)=>{
        setPinturaList(respuesta)
    })
  },[])
    return (
    <>
    <FlexWrapper>
    {PinturaList.map((pintura)=>{
      return <Card 
      id={pintura.id}
      img={pintura.img} 
      title={pintura.title} 
      author={pintura.author} 
      country={pintura.country} 
      price={pintura.price} 
      />
    })}
  
  </FlexWrapper>
  </>
  )
}
