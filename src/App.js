import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Aulas from "./components/pages/Aulas.jsx";
import Users from "./components/pages/Users";
import Perfil from "./components/pages/Perfil";
import Registrar from "./components/pages/Registrar";

function App() {
  //essa é uma função que retorna .jsx -> isso é um componente. Por convenção o nome de componentes sempre começam em maiúscula
  return (
    // <div className="d-flex main-div justify-content-center">
    //   <Login />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <div className="d-flex main-div justify-content-center">
            <Home />
            // </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="d-flex main-div justify-content-center">
              <Login />
            </div>
          }
        />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/registrar" element={<div className="d-flex main-div justify-content-center">
        <Registrar />
            </div>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<Perfil />} />\
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
