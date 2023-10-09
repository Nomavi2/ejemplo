// src/components/NavBar.jsx
import CartWidget from "./CartWidget";
import "../App.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo de la tienda" className="logo-img"/>
      </div>
      <div className="nav-links">
        <a className="links" href="/">Inicio</a>
        <a className="links" href="/productos">Productos</a>
        <a className="links" href="/contacto">Contacto</a>
      </div>
      <CartWidget />
     </nav>
  );
}

export default NavBar;
