import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/Navbar/NavBar";
import TestPromise from "./componentes/Navbar/TestPromise";
//1. importamos los componentes de react router dom
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  //2. Contenemos nuestra App con el BrowserRouter
  //3. Definimos nuesstras rutas con Route y Routes
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/" element={<TestPromise />}></Route>
          <Route path="*" element={<h4>ERROR 404</h4>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
