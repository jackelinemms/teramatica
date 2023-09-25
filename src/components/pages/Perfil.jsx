import React from "react";
import user from "../../img/user.png";
import edit from "../../img/edit.svg";

export default function Perfil() {
  return (
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={user} alt="login" />
        <h1>Fulano de Tal</h1>
        <div className="field-margin-top">
          {/* email */}
          <div className="container">
            <div className="row">
              <div className="col">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email
                </label>
              </div>
              <div className="col">
                <input type="email" className="form-control" id="email"></input>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary btn-editar">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* senha */}
        <div className="field-margin-top">
          <div className="container">
            <div className="row">
              <div className="col">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Senha
                </label>
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                ></input>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary btn-editar">
                  <img src={edit} alt="editar" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="field-margin-top">
          <button className="btn btn-primary btn-lg btn-deletar" type="submit">
            Deletar Conta
          </button>
        </div>
      </div>
    </div>
  );
}
