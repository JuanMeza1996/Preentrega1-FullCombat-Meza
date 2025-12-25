import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "navbar-link navbar-link-active" : "navbar-link";

  return (
    <header className="navbar">
      <Link className="navbar-brand" to="/">
        FULL COMBAT
      </Link>

      <nav className="navbar-links">
        <NavLink className={linkClass} to="/category/marcadoras-electricas">
          Marcadoras eléctricas
        </NavLink>
        <NavLink className={linkClass} to="/category/marcadoras-gas">
          Marcadoras a gas
        </NavLink>
        <NavLink className={linkClass} to="/category/miras">
          Miras
        </NavLink>
        <NavLink className={linkClass} to="/category/insumos">
          Insumos
        </NavLink>
        <NavLink className={linkClass} to="/category/indumentaria">
          Indumentaria
        </NavLink>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
