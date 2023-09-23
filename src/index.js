import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // quando um arquivo é .js ou .jsx podemos omitir a extensão ao importar, que o transpilador vai ser capaz de traduzir
// é uma convenção de desenvolvimento react que componentes do projeto são salvos com letra maiúscula, para diferencia-los de outros arquivos .js/.jsx que não são componentes
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); // esse código está indicando o local onde toda a aplicação será renderizada, no caso a div com id "root" no arquivo index.html na pasta public.
root.render(<App />);

//React.StrictMode habilita o modo estrito do react. pode ser retirado, caso não deseje usa-lo
//<App /> renderiza o componente App.js

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
