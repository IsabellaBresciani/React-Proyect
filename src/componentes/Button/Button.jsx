import "./button.css";
import {useState, useEffect} from "react";
function Button(props){
    const [colorBtn, setColorBtn] = useState({backgroundColor: "pink"}); //una variable - un "seter", devuelve un array uno es una variable y el segundo una funcion que nos permite modificar el valor
    //cuando camia el estado se vuelve a ejecutar y cuando cambia las props que recibe el componente
    
    useEffect(//solo se renderiza una vez en el montaje de la app
        ()=>{
            console.log("montaje del componente")
        },
        [] //para que solo se renderize una vez le tengo que poner este arrray vacio, si no le doy ese array se va a renderizar en cada update del estado
    ) 
    useEffect(//solo se renderiza una vez en el montaje de la app
        ()=>{
            console.log("update del estado")
        },
        [colorBtn] //si el color cambia se vuelve a llamar, siempre se llama al menos una vez
    ) 
    function handleClick(){
        setColorBtn({backgroundColor: "red"}) 
    }    

    return(
        <button onClick={handleClick} style={colorBtn}>{props.text}</button>
    )   
}
export default Button