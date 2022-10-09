import React from 'react'
import "./flexwrapper.css"
export default function FlexWrapper(props) {
  return (
    <>

        <div className='parentCards'>{props.children}</div>
    </>
  )
}
