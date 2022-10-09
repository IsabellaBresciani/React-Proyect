import React from 'react'
import CardWidget from './Logo'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
// todas las etiquetas las remplazamos por link
export default function NavBar() {
  const navBar ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    gap: "3em",
    listStyleType: "none"
  }
 
  return (
    <nav >
        <ul style={navBar}>
        <CardWidget src="https://images.vexels.com/media/users/3/200302/isolated/preview/96e213476e9a6a7b1d44e337f5c624bf-trazo-de-lapiz-de-mano-de-artista.png" />
            <Link to="/">
              <li>Todas</li>
            </Link>
            <Link to="/category/desnudo">
              <li>Desnudo</li>
            </Link>
            <Link to="/category/floral">
              <li>Floral</li>
            </Link>
            <Link to="/category/paisaje">
              <li>Paisaje</li>
            </Link>
            <CartWidget />
        </ul>
        
    </nav>
  )
}
