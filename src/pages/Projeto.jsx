import {useState} from "react";
import axios from 'axios';

import {UrlApi} from "../utils/UrlApi.jsx";

import "../css/Projeto.css";

function Projeto(){
	const [dados, setDados] = useState({titulo: '', desc: ''});
	const [erroPreenchimento, setErroPreenchimento] = useState(false);
	const [msgSucesso, setmsgSucesso] = useState(false);
	const [erro, setErro] = useState(null);

	function handleChange(event){
    	setDados({...dados, [event.target.name]:event.target.value});
  	}

	function submeter(event){
		if(dados.titulo != ''){
			const data = {
				nome_do_Projeto: dados.titulo,
				descricao: dados.desc
			}

		    axios.post(UrlApi()+"projetos", data)
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
		<div className="projeto">
			<form className="formularioP" onSubmit={submeter}>
          		<h2>Cadastro de Projeto</h2>

          		{erro && <p className="camposObrigatoriosP">Erro: {erro.message}</p>}
          		{msgSucesso && <p className="camposObrigatoriosP">Cadastrado Com Sucesso !</p>}
          		{!erroPreenchimento && <p className="camposObrigatoriosP">Campos marcados com * são obrigatórios.</p>}
          		{erroPreenchimento && <p className="camposObrigatoriosP">Um ou mais campos obrigatórios não foram preenchidos !</p>}
          		
          		<input className="inputStyleP" id="titulo" name="titulo" type="text" placeholder="* Título do Projeto" value={dados.titulo} onChange={(e) => {handleChange(e)}}/>
          		<textarea className="textStyleP" name="desc" id="desc" rows="5" placeholder="Descrição do projeto ...    (Opcional)" onChange={(e) => {handleChange(e)}}></textarea>
          		<button className="botaoP" type="submit">Cadastrar</button>
        	</form> 
		</div>
	);
}

export default Projeto;