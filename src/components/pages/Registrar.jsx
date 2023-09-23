import React, { useState } from "react";
import math from "../../math.svg";

export default function Registrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleFormCadastro = (event) => {
    event.preventDefault();
    fetch("https://erin-troubled-duckling.cyclic.app/users", {
      method: "POST",
      body: JSON.stringify({ name: nome, email: email, password: pass }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setNome("");
      setEmail("");
      setPass("");
    });
  };

  return (
    <div className="form-div">
      <main className="form-signin">
        <form onSubmit={handleFormCadastro}>
          <img
            className="mb-4"
            src={math}
            width="72"
            height="72"
            alt="Teramática"
          />
          <h1 className="h3 mb-3 fw-normal login-title">Registre-se</h1>

          <div className="form-floating">
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

          <div className="form-floating">
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
          <div className="form-floating">
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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Registrar
          </button>
        </form>
      </main>
    </div>
  );
}
