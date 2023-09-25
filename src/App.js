import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          path="/usuarios"
          element={
            <div className="d-flex">
              <Users />
            </div>
          }
        />
        <Route path="/usuarios/:userId" element={<Perfil />} />\
        <Route
          path="*"
          element={
            <div className="d-flex">
              <h1>Página não encontrada!</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
