import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../img/math.svg";

export default function Home() {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate("/cadastro");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={math} alt="login" />
        <h1>Teramática</h1>
      </div>

      <div className="text-center field-margin-top">
        <button
          className="btn btn-primary btn-lg btn-teramatica"
          type="submit"
          onClick={navigateCadastro}
        >
          Cadastre-se
        </button>
      </div>

      <div className="text-center field-margin-top">
        <button
          className="btn btn-primary btn-lg btn-teramatica"
          type="submit"
          onClick={navigateLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
