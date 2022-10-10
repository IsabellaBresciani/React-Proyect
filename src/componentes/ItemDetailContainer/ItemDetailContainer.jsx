import CardDetail from './CardDetail'
import React, {useState,useEffect} from 'react'
import {getOneArt} from "../../mockAPI/mockAPI"
import {useParams} from "react-router-dom"

export default function ItemDetailContainer() {
  const [OnePinturaList,setOnePinturaList] = useState({});
    let {id} = useParams()
    useEffect(()=>{
        getOneArt(id).then((respuesta)=>{
        setOnePinturaList(respuesta)
    })},[id])

  return (
    <CardDetail pintura={OnePinturaList}/>
  )
}
