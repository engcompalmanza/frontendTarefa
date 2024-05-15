import "../css/Tarefa.css";

function Tarefa(){
	return(
		<div className="tarefa">
			<form className="formularioT">
          		<h2>Cadastro de Tarefa</h2>
          		<p className="camposObrigatoriosT">Campos marcados com * são obrigatórios.</p>
          		<input className="inputStyleT" id="titulo" name="titulo" type="text" placeholder="* Título da Tarefa" />
          		<textarea className="textStyleT" name="desc" id="desc" rows="2" placeholder="Descrição da tarefa ..."></textarea>
          		<label>
          			<label htmlFor="data">* Vencimento da Tarefa: </label>
          			<input id="data" name="data" type="date" />
          		</label>
			    <label>
			   		<label>* Tarefa com prioridade? </label>
			    	<input type="radio" name="opcao" value="sim"/> Sim
			    	<input type="radio" name="opcao" value="nao"/> Não
			    </label>
			    <label>
			    	<label htmlFor="opcaoStatus">* Status da Tarefa:  </label>
			    	<select id="opcaoStatus" name="opcaoStatus">
			    		<option value="sim">Selecione...</option>
			    	</select>
			    </label>
			    <label>
			    	<label htmlFor="opcaoProjeto">* Vincular com Projeto:  </label>
			    	<select id="opcaoProjeto" name="opcaoProjeto">
			    		<option value="sim">Selecione...</option>
			    	</select>
			    </label>

          		<button className="botaoT" type="submit">Cadastrar</button>
        	</form> 
		</div>
	);
}

export default Tarefa;