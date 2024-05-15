
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";
import Tarefa from "./pages/Tarefa";
import Usuario from "./pages/Usuario";

import Navegacao from "./pages/Navegacao.jsx";
import Rodape from "./pages/Rodape.jsx";

import "./App.css";


function App() {
  return (
    <div className="pagina">
      <Navegacao/>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Home/>}/>
          <Route path="/projeto" element={<Projeto/>}/>
          <Route path="/tarefa" element={<Tarefa/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
        </Routes>
      </BrowserRouter>
      <Rodape/>
    </div>
  )
}

export default App;
