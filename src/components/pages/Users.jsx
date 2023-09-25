import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../img/math.svg";

import AppLoading from "../organisms/AppLoading";
import { getToken, removeToken } from "../helpers/Auth";

export default function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const token = getToken();

    fetch("https://erin-troubled-duckling.cyclic.app/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [navigate]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="container container-main">
      <div className="text-center teramatica-logo">
        <img src={math} alt="login" />
        <h1>Teramática</h1>
        <div className="field-margin-top">
          <h2>Alunos</h2>
        </div>
      </div>

      <select
        className="form-select form-select-lg field-margin-top"
        aria-label="Default select example"
      >
        <option value="">Selecione um aluno</option>
        {users
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
      </select>
      <button
        className="btn btn-primary btn-lg btn-teramatica field-margin-top"
        type="submit"
      >
        Ver Perfil
      </button>
    </div>
  );
}
