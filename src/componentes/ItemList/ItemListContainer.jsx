import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArt, getSubArt } from '../../mockAPI/mockAPI'
import Loader from '../Loader/Loader'
import FlexWrapper from '../FlexWrapper/FlexWrapper'

export default function ItemListContainer() {

  let {categoryID} = useParams()
  const [pinturaList,setPinturaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
      setPinturaList([])
      setIsLoading(true)
      if (!categoryID){
            getArt().then((respuesta)=>{
            setPinturaList(respuesta)
            setIsLoading(false)
        });
      }else{
          getSubArt(categoryID).then((respuesta)=>{
            setPinturaList(respuesta)
            setIsLoading(false)
            
          })    
      }
    },[categoryID])

  return (
    <>
    {isLoading ? 
    <FlexWrapper>
      <Loader size='100' speed='0.9' color='lightblue'/>
    </FlexWrapper>
    :
    <ItemList  pinturaList={pinturaList}/> 
    }
    </>
  )
}
