import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../math.svg";

import AppLoading from "../organisms/AppLoading";
import { saveToken } from "../helpers/Auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch("https://erin-troubled-duckling.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ token }) => {
        saveToken(token);
        navigate("/usuarios");
      })
      .catch(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="form-div">
      <main className="form-signin">
        <form onSubmit={handleLogin}>
          <img className="mb-4" src={math} width="72" height="72" alt="login" />
          <h1 className="h3 mb-3 fw-normal login-title">Teramatica</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=" "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=" "
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="password">Senha</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
