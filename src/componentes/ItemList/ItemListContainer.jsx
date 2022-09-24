import React from 'react'
import Card from '../card/Card.jsx'
import FlexWrapper from '../FlexWrapper/FlexWrapper.jsx'
export default function ItemListContainer(props) {
  return (
    <div>
      <h2>{props.greeting}</h2>
      <FlexWrapper>
        <Card title="Producto 1" detail="Lorem ipsum" price="2000" />
        <Card title="Producto 2" detail="Lorem ipsum3" price="8000" />
      </FlexWrapper>
    </div>
  )
}
