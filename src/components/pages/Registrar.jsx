import React from "react";
import math from "../../math.svg";

export default function Registrar() {
  return (
    <div className="form-div">
      <main className="form-signin">
        <form>
          <img className="mb-4" src={math} width="72" height="72" alt="login" />
          <h1 className="h3 mb-3 fw-normal login-title">Teramatica</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder=" "
            />
            <label for="floatingInput">E-mail</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder=" "
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Manter-me conectado
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Registrar
          </button>
        </form>
      </main>
    </div>
  );
}
