import React from "react";
import "./Home.css";
import cafeImage from "../imags/cafe.avif"; 


const Home = () => {
  return (

    <div className="image-container">
     <img src={cafeImage} alt="" className="image" />
     <div className="tex-overlay">
        <h1 className="bem">Bem vindo ao Devs Café</h1>
        <button className="btn-cadastro">Cadastro</button>
     </div>
    
    </div>

  );
};

export default Home;