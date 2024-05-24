import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import {UrlApi} from "../utils/UrlApi.jsx";
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../css/Tarefa.css";

function Tarefa(){
	const navigate = useNavigate();
	const {uid, pid} = useParams();
	const [dados, setDados] = useState({titulo: '', desc: '', venc: '', prioridade: '', status: ''});
	const [erroPreenchimento, setErroPreenchimento] = useState(false);
	const [msgSucesso, setmsgSucesso] = useState(false);
	const [erro, setErro] = useState(null);
	const [status, setStatus] = useState([]);

	function handleChange(event){
    	setDados({...dados, [event.target.name]:event.target.value});
  	}

  	function submeter(event){
		if(dados.titulo != '' && dados.venc != '' && dados.prioridade != '' && dados.status != ''){
			const data = {
				titulo: dados.titulo,
				descricao: dados.desc,
				vencimento: dados.venc,
				prioridade: dados.prioridade,
				status: dados.status,
				projeto: pid
			}

		    axios.post(UrlApi()+"tarefas/"+uid, data)
		    .then(response => {
		    	setmsgSucesso(true);
		    	setTimeout(() => {
      				navigate("/gerenciamento/"+uid);
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

	useEffect(() => {
	    axios.get(UrlApi()+"status")
	    .then((response) => {
			setStatus(response.data);        
	    })
	    .catch((error) => {
	    	setErro(error);
	    });
	}, []);

	return(
		<div className="tarefa">
			<form className="formularioT" onSubmit={submeter}>
          		<h2>Cadastro de Tarefa</h2>

          		{erro && <p className="camposObrigatoriosT">Erro: {erro.message}</p>}
          		{msgSucesso && <p className="camposObrigatoriosT">Cadastrado Com Sucesso !</p>}
          		{!erroPreenchimento && <p className="camposObrigatoriosT">Campos marcados com * são obrigatórios.</p>}
          		{erroPreenchimento && <p className="camposObrigatoriosT">Um ou mais campos obrigatórios não foram preenchidos !</p>}
          		
          		<input className="inputStyleT" id="titulo" name="titulo" type="text" placeholder="* Título da Tarefa" onChange={(e) => {handleChange(e)}}/>
          		<textarea className="textStyleT" name="desc" id="desc" rows="2" placeholder="Descrição da tarefa ...     (Opcional)" onChange={(e) => {handleChange(e)}}></textarea>
          		<label>
          			<label htmlFor="venc">* Vencimento da Tarefa: </label>
          			<input id="venc" name="venc" type="date" onChange={(e) => {handleChange(e)}}/>
          		</label>
			    <label>
			   		<label>* Tarefa com prioridade? </label>
			    	<input type="radio" name="prioridade" value="true" onChange={(e) => {handleChange(e)}}/> Sim
			    	<input type="radio" name="prioridade" value="false" onChange={(e) => {handleChange(e)}}/> Não
			    </label>
			    <label>
			    	<label htmlFor="status">* Status da Tarefa:  </label>
			    	<select id="status" name="status" onChange={(e) => {handleChange(e)}}>
			    		<option>Selecione...</option>
			    		{status.map(statusValor => (
			    			<option value={statusValor}>{statusValor}</option>
			    		))}
			    	</select>
			    </label>
			    {/*}
			    <label>
			    	<label htmlFor="projeto">* Vincular com Projeto:  </label>
			    	<select id="projeto" name="projeto" onChange={(e) => {handleChange(e)}}>
			    		<option>Selecione...</option>
				          {projetos.map((proj, index) => (
				            <option key={index} value={proj.id}>
				              {proj.nome_do_Projeto}
				            </option>
				          ))}
			    	</select>
			    </label>
				{*/}
        		<Button variant="contained" type="submit">Cadastrar</Button>
        	</form> 
		</div>
	);
}

export default Tarefa;