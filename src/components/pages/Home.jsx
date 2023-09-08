import React from "react";
import math from "../../math.svg";

import "../../bootstrap/bootstrap.min.css";
import "../../bootstrap/style.css";

export default function Home() {
  return (
    <div className="form-div">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src={math}
            width="100"
            height="100"
            alt="Teramatica"
          />
          <h1 className="h3 mb-3 fw-normal login-title">Teramatica</h1>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Registrar
          </button>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Login
          </button>

          <button className="w-100 btn btn-lg btn-secondary" type="submit">
            Entrar com o Google
          </button>

          <button className="w-100 btn btn-lg btn-secondary" type="submit">
            Entrar com o Facebook
          </button>
        </form>
      </main>
    </div>
  );
}
