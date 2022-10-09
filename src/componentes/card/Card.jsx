import "./card.css"
import {Link} from 'react-router-dom'
import React from "react";
function Card(props){
    return(
        <div className="card">
            <div className="card-detail">
                <img src={props.img} alt="pintura"></img>
                <h4>{props.title}</h4>
                <p>{props.author}</p>
                <p>{props.country}</p>
                <p>${props.price}</p>
                <Link to={`/art/${props.id}`}>
                    <button>Agregar al carrito</button>  
                </Link>
            </div>
        </div>
    )
}

export default Card;