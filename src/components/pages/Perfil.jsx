import React, { useState, useEffect } from "react";
import profile from "../../img/user.png";
import { useParams } from "react-router-dom";
import EasyEdit, { Types } from "react-easy-edit";
import { useNavigate } from "react-router-dom";

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

  //UPDATE
  const [currentEmail, setcurrentEmail] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");

  const handlePatchEmail = () => {
    fetch(`https://erin-troubled-duckling.cyclic.app/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({ email: currentEmail }),
      headers: { "Content-Type": "application/json" },
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  };

  const handlePatchSenha = () => {
    fetch(`https://erin-troubled-duckling.cyclic.app/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({ password: currentPassword }),
      headers: { "Content-Type": "application/json" },
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  };

  //DELETE
  const navigate = useNavigate();

  const handleDelete = ({ userId }) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => console.warn(response));
      navigate("/users");
    });
  };

  return user.data ? (
    <div className="container container-perfil">
      <div className="text-center teramatica-logo">
        <img src={profile} alt="login" />
        <h1>{user.data.name}</h1>
        <div className="field-margin-top">
          {/* email */}
          <div className="container">
            <div className="row">
              <div className="col">
                <label htmlFor="email" className="col-sm-4 col-form-label">
                  Email
                </label>
              </div>
              <div className="col">
                <EasyEdit
                  id="email"
                  type={Types.TEXT}
                  value={user.data.email}
                  onSave={(val) => setcurrentEmail(val)}
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-editar"
                  onClick={handlePatchEmail}
                >
                  Salvar
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
                <label htmlFor="password" className="col-sm-4 col-form-label">
                  Senha
                </label>
              </div>
              <div className="col">
                <EasyEdit
                  id="password"
                  type={Types.TEXT}
                  value={user.data.password}
                  onSave={(val) => setcurrentPassword(val)}
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-editar"
                  onClick={handlePatchSenha}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="field-margin-top">
          <button
            className="btn btn-primary btn-lg btn-deletar"
            type="submit"
            onClick={handleDelete}
          >
            Deletar Conta
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Carregando....</h1>
  );
}
