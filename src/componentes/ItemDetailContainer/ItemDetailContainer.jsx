import CardDetail from './CardDetail'
import React, {useState,useEffect} from 'react'

import {useParams} from "react-router-dom"
import { getOneArt } from '../../servicios/firebase'
export default function ItemDetailContainer() {
  const [OnePinturaList,setOnePinturaList] = useState({});
  const [Feedbackmsg,setFeedbackmsg]= useState(null)
    let {id} = useParams()
    console.log(id)
    
    useEffect(()=>{
        getOneArt(id).then((respuesta)=>{
        setOnePinturaList(respuesta)
      })
      .catch((error)=>{
        setFeedbackmsg(error.message);});
        
      },[id])

  
  return (
    <>
      {Feedbackmsg !== null ? 
      <h4>Error: {Feedbackmsg}</h4> 
      : 
      <CardDetail pintura={OnePinturaList}/> }
      
    </>
    
  )
}
