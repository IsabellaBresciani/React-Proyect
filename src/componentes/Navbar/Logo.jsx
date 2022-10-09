import React from 'react'

export default function CardWidget(props) {
  const Logo = {
    width:"5%",
    pading:"2%"
  }
  return (
    <img style={Logo} src={props.src} alt='logo'/>
  )
}
