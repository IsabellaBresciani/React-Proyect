import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArt, getSubArt } from '../../mockAPI/mockAPI'

export default function ItemListContainer() { 
  let {categoryID} = useParams()
  console.log(categoryID)
  const [PinturaList,setPinturaList] = useState([]);
  useEffect(()=>{
      if (categoryID === undefined){
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
    <ItemList  category={PinturaList}/>
  )
}
