import React from 'react'
import CardWidget from './CardWidget'

export default function NavBar() {
  const navBar ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    padding: "3%",
    gap: "3em",
    "list-style-type": "none"

  }
 
  return (
    <nav >
        
        <ul style={navBar}>
        <CardWidget src="https://images.vexels.com/media/users/3/200302/isolated/preview/96e213476e9a6a7b1d44e337f5c624bf-trazo-de-lapiz-de-mano-de-artista.png" />
            <li>Novedades</li>
            <li>Tematicas</li>
            <li>Artistas</li>
            <li>Colecciones</li>
        </ul>
        
    </nav>
  )
}
