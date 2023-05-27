import React from "react";
import "./Home.css";
import cafeImage from "../imags/cafe.avif";
import { Link } from "react-router-dom";


const Home = () => {
  return (

    <main className="image-container">
      {/* <img src={cafeImage} alt="" className="image" /> */}

      <div className="tex-overlay">
        <section className="conteudo">
          <h1 className="bem">
            Bem-vindo ao Dev's Café!
          </h1>
          <div>
            <Link to="./Login">
            <button className="btn-cadastro">
              Cadastro
            </button>
            </Link>
          </div>
        </section>
      </div>

    </main>

  );
};

export default Home;