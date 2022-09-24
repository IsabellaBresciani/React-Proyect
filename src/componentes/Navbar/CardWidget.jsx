import React from 'react'

export default function CardWidget(props) {
  const logo = {
    width:"5%",
    pading:"2%"
  }
  return (
    <img style={logo} src={props.src} alt='logo'></img>
  )
}
