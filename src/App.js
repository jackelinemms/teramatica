import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Aulas from "./components/pages/Aulas.jsx";
import Users from "./components/pages/Users";
import Perfil from "./components/pages/Perfil";
import Cadastrar from "./components/pages/Cadastrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="d-flex">
              <Home />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="d-flex">
              <Login />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="d-flex">
              <Login />
            </div>
          }
        />
        <Route
          path="/aulas"
          element={
            <div className="d-flex">
              <Aulas />
            </div>
          }
        />
        <Route
          path="/cadastro"
          element={
            <div className="d-flex">
              <Cadastrar />
            </div>
          }
        />
        <Route
          path="/users"
          element={
            <div className="d-flex">
              <Users />
            </div>
          }
        />
        <Route
          path="/users/:userId"
          element={
            <div className="d-flex">
              <Perfil />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="d-flex vh-100 align-items-center justify-content-center">
              <h1>Página não encontrada!</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
