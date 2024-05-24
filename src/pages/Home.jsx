import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import React from 'react';
import { useSelector } from 'react-redux';

import "../css/Home.css";

function Home(){

	return(
		<div className="home">
			<h1 className="title">TarefaÁgil</h1>
			<p className="descricao">TarefaÁgil é uma ferramenta de gerenciamento de tarefas projetada<br/>
			para maximizar a produtividade e a organização. Com uma interface limpa<br/>
			e intuitiva, ela permite aos usuários criar, priorizar e receber lembretes<br/> 
			de tarefas proximas da data de entrega. 
			</p>
      		<Button variant="contained" href="/usuario">Se cadastre e comece já</Button>
		</div>
	);
}

export default Home;