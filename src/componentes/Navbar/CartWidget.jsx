import React from 'react'

export const CartWidget = () => {
  const cart = {
    width:"5%",
    pading:"2%"
  }
  return (
    <img style={cart} src="https://cdn-icons-png.flaticon.com/512/107/107831.png"  alt='cart' />
  )
}
