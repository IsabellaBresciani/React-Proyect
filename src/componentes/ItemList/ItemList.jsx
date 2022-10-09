
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import Card from "../card/Card"
import React from 'react'

export default function ItemList(pinturaList) {
    console.log(pinturaList)
    return (
    <>
    <FlexWrapper>
    {pinturaList.pinturaList.map((pintura)=>{
      return <div className='card'>
       <Card 
      key = {pintura.id}
      id={pintura.id}
      img={pintura.img} 
      title={pintura.title} 
      author={pintura.author} 
      country={pintura.country} 
      price={pintura.price} 
      />
      </div>
    })}
  
  </FlexWrapper>
  </>
    )
}
