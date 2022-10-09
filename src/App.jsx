import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/Navbar/NavBar";
//1. importamos los componentes de react router dom
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


function App() {
  //2. Contenemos nuestra App con el BrowserRouter
  //3. Definimos nuesstras rutas con Route y Routes
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path="/category/:categoryID" element={<ItemListContainer />}/>
          <Route path="/art/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<h4>ERROR 404</h4>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
