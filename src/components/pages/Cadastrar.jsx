import React, { useState } from "react";
import math from "../../img/math.svg";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleFormCadastro = (event) => {
    event.preventDefault();
    fetch("https://erin-troubled-duckling.cyclic.app/users", {
      method: "POST",
      body: JSON.stringify({ name: nome, email: email, password: pass }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      window.alert("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setPass("");
      navigate("/login");
    });
  };

  return (
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={math} alt="login" />
        <h1>Teramática</h1>
        <div className="field-margin-top">
          <h2>Cadastre-se</h2>
        </div>
      </div>

      <form onSubmit={handleFormCadastro}>
        <div className="form-floating field-margin-top">
          <input
            type="text"
            className="form-control"
            id="registroNome"
            placeholder=" "
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <label htmlFor="registroNome">Nome</label>
        </div>

        <div className="form-floating field-margin-top">
          <input
            type="email"
            className="form-control"
            id="registroEmail"
            placeholder=" "
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="registroEmail">E-mail</label>
        </div>
        <div className="form-floating field-margin-top">
          <input
            type="password"
            className="form-control"
            id="registroPassword"
            placeholder=" "
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
          <label htmlFor="registroPassword">Senha</label>
        </div>

        <div className="field-margin-top">
          <button
            className="btn btn-primary btn-lg btn-teramatica"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
