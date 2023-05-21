import { Link } from 'react-router-dom'

function Menu() {

    return(
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
            <a class="navbar-brand" href="#">JOb Finder</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to="/">Home</Link>
                </li><li class="nav-item">
                <Link to="#">Link</Link>
                </li>
                <li class="nav-item">
                <Link to="#">Link</Link>
                </li>
                <li class="nav-item">
                <Link to="#">Link</Link>
                </li>
                <li class="nav-item">
                <Link to="/Contato">Contato</Link>
                </li>
              </ul>
  
              <form class="d-flex" role="search">
                <button class="btn0">Register</button>
                <button class="btn1 mx-2">Login</button>
              </form>
            </div>
            </div>
        </nav>
    )

}

export default Menu;