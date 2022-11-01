import React from 'react'
import { DotSpinner } from '@uiball/loaders'
export default function Loader({size,speed,color}) {
  return (
    <>
    <DotSpinner 
        size={parseInt(size)}
        speed={parseFloat(speed)} 
        color={color} 
    />
    </>
  )
}
