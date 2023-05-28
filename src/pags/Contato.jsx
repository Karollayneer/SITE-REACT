import React, { useState } from "react";
import "./Contato.css";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Código para processar os dados do formulário aqui
    console.log("Dados do formulário:", { nome, email, mensagem });
    setNome("");
    setEmail("");
    setMensagem("");
    setEnviado(true);
  };

  return (
    <div className="contato-container">
      <h1>Contato</h1>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <div className="campo-formulario">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className="enviado">
          <p>Enviado com sucesso!</p>
        </div>
      )}
    </div>
  );
};

export default Contato;
