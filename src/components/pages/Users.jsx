import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../math.svg";

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
    <div className="form-div">
      <img
        className="mb-4"
        src={math}
        width="72"
        height="72"
        alt="Teramática"
      />
      <h1 className="h3 mb-3 fw-normal login-title">Alunos</h1>

      <select className="form-select" aria-label="Default select example">
        <option value="">Selecione um aluno</option>
        {users
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
      </select>
      <button className="w-100 btn btn-lg btn-primary btn-entrar" type="submit">
        Ver Perfil
      </button>
    </div>
  );
}
