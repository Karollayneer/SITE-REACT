import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="linkativo">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
        <Link to="/sobre">Sobre</Link>
        </li>
        <li className="cad">
          <Link to="/login">Login/Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
