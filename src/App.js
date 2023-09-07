import Login from "./components/pages/Login.jsx"
import "./bootstrap/css/bootstrap.css"
import "./bootstrap/style.css"

function App() {
  //essa é uma função que retorna .jsx -> isso é um componente. Por convenção o nome de componentes sempre começam em maiúscula
  return (
    <div className="d-flex main-div justify-content-center">
      <Login />  
    </div>
    
  );
}

export default App;
