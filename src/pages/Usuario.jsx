import { useState, useRef,useEffect} from 'react';
import axios from 'axios';

import {UrlApi} from "../utils/UrlApi.jsx";

import "../css/Usuario.css";

function Usuario(){
	const [dados, setDados] = useState({nome: '', email: '', senha: ''});
	const [erroPreenchimento, setErroPreenchimento] = useState(false);
	const [msgSucesso, setmsgSucesso] = useState(false);
	const [erro, setErro] = useState(null);

	function handleChange(event){
    	setDados({...dados, [event.target.name]:event.target.value});
  	}

  	function submeter(event){
		if(dados.nome != '' && dados.email != '' && dados.senha != ''){
			let lista = [];
			const data = {
				nome: dados.nome,
				email: dados.email,
				senha: dados.senha,
				tarefasIds: lista
			}

		    axios.post(UrlApi()+"usuarios", data)
		    .then(response => {
		    	setmsgSucesso(true);
		    	setTimeout(() => {
      				window.location.reload(); 
    			}, 2500);
		    })
		    .catch(error => {
		    	setErro(error);
		    });
		}else{
			setErroPreenchimento(true);
		}
		event.preventDefault();
	}

	return(
		<div className="usuario">
			<form className="formularioU" onSubmit={submeter}>
          		<h2>Cadastro de Usuário</h2>

          		{erro && <p className="camposObrigatoriosT">Erro: {erro.message}</p>}
          		{msgSucesso && <p className="camposObrigatoriosT">Cadastrado Com Sucesso !</p>}
          		{!erroPreenchimento && <p className="camposObrigatoriosT">Campos marcados com * são obrigatórios.</p>}
          		{erroPreenchimento && <p className="camposObrigatoriosT">Um ou mais campos obrigatórios não foram preenchidos !</p>}

          		<input className="inputStyleU" id="nome" name="nome" type="text" placeholder="* Nome" onChange={(e) => {handleChange(e)}}/>
          		<input className="inputStyleU" id="email" name="email" type="email" placeholder="* E-mail" onChange={(e) => {handleChange(e)}}/>
          		<input className="inputStyleU" id="senha" name="senha" type="password" placeholder="* Senha" onChange={(e) => {handleChange(e)}}/>

          		<button className="botaoU" type="submit">Cadastrar</button>
        	</form> 
		</div>
	);
}

export default Usuario;