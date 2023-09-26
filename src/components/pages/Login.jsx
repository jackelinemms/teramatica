import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../img/math.svg";

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
        navigate("/users");
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
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={math} alt="login" />
        <h1>Teramática</h1>
        <div className="field-margin-top">
          <h2>Login</h2>
        </div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="form-floating field-margin-top">
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder=" "
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className="form-floating field-margin-top">
          <input
            type="password"
            className="form-control form-control-lg"
            id="password"
            placeholder=" "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="email">Senha</label>
        </div>

        <div className="text-center field-margin-top">
          <button
            className="btn btn-primary btn-lg btn-teramatica"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
