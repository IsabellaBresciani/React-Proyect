import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/Navbar/NavBar";
//1. importamos los componentes de react router dom
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {CartContextProvider} from "./Context/cartContext.jsx"
import CartView from "./componentes/CartView/CartView";
import firebaseApp from "./servicios/firebase";
function App() {
  //2. Contenemos nuestra App con el BrowserRouter
  //3. Definimos nuesstras rutas con Route y Routes
  console.log(firebaseApp)
  return (
    <> 
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/cart" element={<CartView />}/>
              <Route path="/category/:categoryID" element={<ItemListContainer hola="Bienvenidos" />}/>
              <Route path="/art/:id" element={<ItemDetailContainer />}/>
              <Route path="*" element={<h4>ERROR 404</h4>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
