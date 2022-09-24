import Button from "../Button/Button.jsx"
import "./card.css"
function Card(props){
    return(
        <div className="card">
            <div className="card-detail">
                <img src={props.img} alt="pintura"></img>
                <h4>{props.title}</h4>
                <p>{props.author}</p>
                <p>{props.country}</p>
                <p>{props.price}</p>
                <Button text="buy me"/>
            </div>
        </div>
    )
}

export default Card;