

const data = [
    {
        id:1,
        img:"https://artelista.s3.amazonaws.com/obras/fichas/0/5/2/4825230943179192.jpg",
        title:"La mirada del palacio de oriente",
        author:"JOSE LUIS PEREZ MUÑOZ",
        counthy: "España",
        price: 94959,
        stock:15,
        mesures:"35 x 50 cm",
        categoria:"pintura",
        tematica: "paisaje"
    },
    {
        id:2,
        img:"https://artelista.s3.amazonaws.com/obras/big/5/3/1/1204235.jpg",
        title:"Montaña leonesa el cebreiro",
        author:"GUILLERMO CARBAJO",
        counthy: "España",
        price: 26186,
        stock:12,
        mesures:"36 x 28 cm",
        categoria:"pintura",
        tematica: "paisaje"
    },
    {
        id:3,
        img:"https://artelista.s3.amazonaws.com/obras/fichas/7/7/2/1231389.jpg",
        title:"Floral land 1000",
        author:"jingshen you",
        counthy: "China",
        price: 87046,
        stock:10,
        mesures:"120 x 90 cm",
        categoria:"pintura",
        tematica: "floral"
    },
    {
        id:4,
        img:"https://artelista.s3.amazonaws.com/obras/fichas/3/3/4/1233652.jpg",
        title:"Water Lilies Pond",
        author:"Behshad Arjomandi",
        counthy: "Italia",
        price: 136680,
        stock:11,
        mesures:"80 x 80 cm",
        categoria:"pintura",
        tematica: "floral"
    },
    {
        id:5,
        img:"https://artelista.s3.amazonaws.com/obras/fichas/1/5/6/6372516416403623.jpg",
        title:"Morfeo 2015",
        author:"David Farrés Calvo",
        counthy: "España",
        price: 150680,
        stock:17,
        mesures:"116 x 81 cm",
        categoria:"pintura",
        tematica: "desnudo"
    }
    ,
    {
        id:6,
        img:"https://artelista.s3.amazonaws.com/obras/fichas/2/0/7/1216962.jpg",
        title:"Rouge II",
        author:"Doris Duschelbauer",
        counthy: "Irlanda",
        price: 180680,
        stock:24,
        mesures:"55 x 162 cm",
        categoria:"pintura",
        tematica: "desnudo"
    }
]

export function getArt(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
            
        },2000)
        
    })
}

export function getSubArt(categoryID){
    console.log(categoryID)
    return new Promise((resolve, reject)=>{
        let subArt = data.filter(item =>
            (item.tematica === categoryID)
        )
       
        setTimeout(()=>{
        
                resolve(subArt)
    
        },2000)
        
    })
}

export function getOneArt(idParams){
    return new Promise((resolve,reject)=>{
        let artReq = data.find((item)=>{
            return (item.id === Number(idParams))
        })
        setTimeout(()=>{
            if(artReq === undefined){
                reject(new Error("no se pudo encontrar la pintura."))
            }else{
            resolve(artReq)
            }
        },1000)
        
    })
}