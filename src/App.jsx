import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import NavBar from "./componentes/Navbar/NavBar";


function App() {
  let titulo = "Hola Coderhouse!"
  return (
    <div className="App">
      <NavBar />
      <header className='App-header'>{titulo.toUpperCase()}</header>
      <ItemListContainer greeting="Bienvenidos"/>
      
    </div>
  );
}

export default App;
