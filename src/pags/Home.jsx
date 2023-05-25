import React from "react";
import "./Home.css";
import cafeImage from "../imags/cafe.avif"; 


const Home = () => {
  return (

    <main className="image-container">
     {/* <img src={cafeImage} alt="" className="image" /> */}

     <div className="tex-overlay">
        <section className="conteudo">
          <h1 className="bem">Bem-vindo ao Dev's Café!</h1>
          <div><button className="btn-cadastro">Cadastro</button></div>
        </section>
     </div>
    
    </main>

  );
};

export default Home;