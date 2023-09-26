import React, { useState, useEffect } from "react";
import profile from "../../img/user.png";
import edit from "../../img/edit.svg";
import { useParams } from "react-router-dom";

export default function Perfil() {
  const { userId } = useParams();

  const [user, setUser] = useState({}); //vai guardar os dados do usuario

  useEffect(() => {
    fetch(`https://erin-troubled-duckling.cyclic.app/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [userId]);

  console.log("user", user);

  return (
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={profile} alt="login" />
        <h1>{user.data.name}</h1>
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
                {/* <input type="email" className="form-control" id="email"></input> */}
                {user.data.email}
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
                {/* <input
                  type="password"
                  className="form-control"
                  id="password"
                ></input> */}
                {user.data.password}
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
