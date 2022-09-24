import React from "react";

export default function TestPromise(){
    
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("error en el proceso")},3000)
        
    })
    promise.then((respuesta)=>{
        console.log("respuesta recibida",respuesta)
    }).catch((respuestaError)=>{
        console.log(respuestaError)
    })
    return(
        <></>
    )
}

