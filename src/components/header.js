import cartWidget from "./cartWidget";

const Navbar = () => {
    return(
        <div>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">ShoppingHouse</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Categorias
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Tecnologia</a>
          <a className="dropdown-item" href="#">Juegos de Mesa</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Consolas</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
      <div>
        <cartWidget/>
        <itemCount/>
      </div>
    </div>
    </div>
    );
}

export default Navbar;