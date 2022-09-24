import Button from "../Button/Button.jsx"
import "./card.css"
function Card(props){
    return(
        <div className="card">
            <div className="card-img"><img src="" alt=""></img></div>
            <div className="card-detail">
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
                <p>{props.price}</p>
                <Button text="buy me"/>
            </div>
        </div>
    )
}

export default Card;