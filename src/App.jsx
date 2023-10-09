// src/App.js
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  const mensajeBienvenida = "¡Bienvenido a nuestra tienda en línea!";

  return (
    <div>
      <NavBar />
      <ItemListContainer mensajeBienvenida={mensajeBienvenida} />
    </div>
  );
}

export default App;
