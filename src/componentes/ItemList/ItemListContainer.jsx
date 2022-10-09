import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArt, getSubArt } from '../../mockAPI/mockAPI'

export default function ItemListContainer(props) {
  let saludo = props.greeting
  console.log(saludo)

  let {categoryID} = useParams()
  const [pinturaList,setPinturaList] = useState([]);
  useEffect(()=>{
      if (!categoryID){
            getArt().then((respuesta)=>{
            setPinturaList(respuesta)
        });
      }else{
          getSubArt(categoryID).then((respuesta)=>{
            setPinturaList(respuesta)
          })    
      }
    },[categoryID])

  return (
    <>
      <h1>{saludo}</h1>
      <ItemList  pinturaList={pinturaList}/>
    </>
  )
}
