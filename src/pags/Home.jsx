import React from "react";
import "./Home.css";
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
            <p className="tx">
            Que tal experimentar as nossas deliciosas variedades de café para dar um upgrade no seu dia de trabalho? Afinal, nada melhor do que uma boa xícara de café para energizar nossas manhãs e tardes de trabalho.
            </p>
          </div>
        </section>
      </div>

    </main>

  );
};

export default Home;