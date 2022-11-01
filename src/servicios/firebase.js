// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  query, where } from "firebase/firestore";


import {   doc, getFirestore, collection, getDocs, getDoc, addDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfC14ZLDD-2O8KK-tDjC0kLGYzRehlS7c",
  authDomain: "react-app-a55bb.firebaseapp.com",
  projectId: "react-app-a55bb",
  storageBucket: "react-app-a55bb.appspot.com",
  messagingSenderId: "542409944609",
  appId: "1:542409944609:web:7cd6f793c34d147df1fd60",
  measurementId: "G-LZENT0BMQD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default firebaseApp;

export async function getArt(){
    const querySnapshot = await getDocs(collection(db, "pinturas"));
    let dataArt = querySnapshot.docs.map((doc) => {
  // doc.data() is never undefined for query doc snapshots
    return {id: doc.id, ...doc.data()};});
    return dataArt
}

export async function getSubArt(categoryID){
    const q = query(collection(db, "pinturas"), where("tematica", "==", categoryID));
    const querySnapshot = await getDocs(q);
    let dataArt = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
          return {id: doc.id, ...doc.data()};
        });
    return dataArt
}

export async function getOneArt(idParams){
    const docRef = doc(db, "pinturas", idParams);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {id: docSnap.id , ...docSnap.data()};
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");  
    }
}

export  async function createOrder(order){
    const querySnapshot = collection(db, "orders");
    let respuesta =  await addDoc(querySnapshot, order)
    console.log(respuesta.id)
}

export  async function subir(){
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
    data.forEach((pintura) => {
        delete(pintura.id)
        const querySnapshot = collection(db, "pinturas");
        let respuesta = addDoc(querySnapshot, pintura)
        console.log(respuesta.id)
    })   
}


