import React from "react";
import AdicionarReceita from "./pages/AdicionarReceita/AdicionarReceita";
import Cadastro from "./pages/Cadastro/Cadastro";
import DetalheReceita from "./pages/DetalheReceita/DetalheReceita";
import ListaReceita from "./pages/ListaReceita/ListaReceita";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
     <AdicionarReceita/>
     <Cadastro/>
     <DetalheReceita/>
     <ListaReceita/>
     <Login/>
    </div>
  );
}

export default App;