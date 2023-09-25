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
          <div class="container">
            <div class="row">
              <div class="col">
                <label forHtml="email" className="col-sm-2 col-form-label">
                  Email
                </label>
              </div>
              <div class="col">
                <input type="email" className="form-control" id="email"></input>
              </div>
              <div class="col">
                <button type="button" className="btn btn-primary btn-editar">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* senha */}
        <div className="field-margin-top">
          <div class="container">
            <div class="row">
              <div class="col">
                <label forHtml="password" className="col-sm-2 col-form-label">
                  Senha
                </label>
              </div>
              <div class="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                ></input>
              </div>
              <div class="col">
                <button type="button" className="btn btn-primary btn-editar">
                  Editar
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
