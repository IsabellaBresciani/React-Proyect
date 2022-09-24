import React from 'react'
import "./flexwrapper.css"
export default function FlexWrapper(props) {
  return (
    <>
        <h1>Listado de children:</h1>
        <div className='parentCards'>{props.children}</div>
    </>
  )
}
