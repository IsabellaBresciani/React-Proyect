import React from 'react'
import CardWidget from './CardWidget'

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li>Novedades</li>
            <li>Tematicas</li>
            <li>Artistas</li>
            <li>Colecciones</li>
        </ul>
        <CardWidget />
    </nav>
  )
}
