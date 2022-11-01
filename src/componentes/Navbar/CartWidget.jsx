import React, { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const {getTotalItems} = useContext(cartContext)
  const cartStyle = {
    width:"5%",
    pading:"2%"
  }
  let total = getTotalItems()
  console.log(total)
  return (
    <>
    < Link to="/cart"><img style={cartStyle} src="https://cdn-icons-png.flaticon.com/512/107/107831.png"  alt='cart' /></Link> 
    <span>{total>0 && total}</span>
    </>
  )
}
