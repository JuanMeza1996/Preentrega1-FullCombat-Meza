import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Full Combat
      </div>

      <nav className="navbar-links">
        <a href="#">Marcadoras eléctricas</a>
        <a href="#">Marcadoras a gas</a>
        <a href="#">Miras</a>
        <a href="#">Insumos</a>
        <a href="#">Indumentaria</a>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
