
import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'

export const CartWidget = () => {
  const {getTotalItems} = useContext(cartContext)
  const cartStyle = {
    width:"5%",
    pading:"2%"
  }
  return (
    <>
    <img style={cartStyle} src="https://cdn-icons-png.flaticon.com/512/107/107831.png"  alt='cart' />
    <span>{getTotalItems()}</span>
    </>
  )
}
