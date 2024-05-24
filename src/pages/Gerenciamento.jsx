import React, { useState, useRef,useEffect } from 'react';
import {useParams} from "react-router-dom";

import axios from 'axios';

import "../css/Gerenciamento.css";

import {UrlApi} from "../utils/UrlApi.jsx";

function Gerenciamento(){

	const {uid} = useParams();
	const [usuario, setUsuario] = useState(0);

	const [tarefas, setTarefas] = useState(null);
	const [projetos, setProjetos] = useState(null);
	const [erro, setErro] = useState(null);
	const [projeto, setProjeto] = useState(null)

	useEffect(() => {
	  	axios.get(UrlApi()+"usuarios/projetos/"+uid)
	    .then((response) => {
			setProjetos(response.data);
	    })
	    .catch((error) => {
	    	setErro(error);
	    });

	    axios.get(UrlApi()+"usuarios/tarefas/"+uid)
	    .then((response) => {
			setTarefas(response.data);  
	    })
	    .catch((error) => {
	    	setErro(error);
	    });
	}, []);

	function handleClick(proj){
		setProjeto(proj);
	}

	return(
		<div className="prancheta">
			<div className="projetos">
				<h2>Projetos</h2>
				{erro && <p>Erro: {erro.message}</p>}
				{projetos?
					<>
					{!erro && 
						<ul className="listaProjetos">
						{projetos.map((proj, index) => (
							<li onClick={()=>handleClick(proj)}>{proj.nome_do_Projeto}</li>
				        ))}
						</ul>
					}
					<a href={"/projeto/"+uid}>+</a>
					</>
				:
					<>
					<p>Seus projetos serão listados aqui!</p>
					<p><a href={"/projeto/"+uid}>Clique aqui</a> e cadastre um projeto.</p>
					</>
				}
			</div>
			<div className="visualizacaoProj">
				<div className="projetoSelecionado">
				{projeto?
					<>
					<div>
						<h2>Projeto: {projeto.nome_do_Projeto}</h2>
						<p>Descrição: {projeto.descricao}</p>
					</div>
					<div className="posicionaBtnProj">
						<button className="btnProj">Excluir</button>
						<button className="btnProj">Alterar</button>
					</div>
					</>
				:
					<h2>Selecione um Projeto ao lado para visualização</h2>
				}
				</div>
				<div className="tarefasPorProjeto">
					<h2>Tarefas</h2>
					{projeto && <p><a href={"/tarefa/"+uid+"/"+projeto.id}>+</a></p>}
					{tarefas?
						<>
						<ul className="listaTarefas">
							{projeto?
								tarefas.map((tar, index) => (
									<>
									{tar.nomeProjeto == projeto.nome_do_Projeto && 
										<li>
										<p>{tar.titulo}</p>
										<div className="posicionaBtnTar">
										<button>Excluir</button>
										<button>Editar</button>
										<button>Status</button>
										</div>
										</li>
									}
									
									</>
					        	))
						        :
					        	<>
					        		<p>Aqui serão listadas suas tarefas por projeto.</p>
					        	</>
							}
						
						</ul>

						</>
						:
						<>
						<p>Cadastre Tarefas</p>
						</>
					}
				</div>
			</div>
		</div>
	);
}

export default Gerenciamento;