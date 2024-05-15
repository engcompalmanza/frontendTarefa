import "../css/Usuario.css";

function Usuario(){
	return(
		<div className="usuario">
			<form className="formularioU">
          		<h2>Cadastro de Usuário</h2>
          		<p className="camposObrigatoriosU">Campos marcados com * são obrigatórios.</p>
          		<input className="inputStyleU" id="titulo" name="titulo" type="text" placeholder="* Nome" />
          		<input className="inputStyleU" id="titulo" name="titulo" type="email" placeholder="* E-mail" />
          		<input className="inputStyleU" id="titulo" name="titulo" type="password" placeholder="* Senha" />
			    <label>
			    	<label htmlFor="opcaoTarefa">Vincular com Tarefa:  </label>
			    	<select id="opcaoTarefa" name="opcaoTarefa">
			    		<option value="sim">Selecione...</option>
			    	</select>
			    </label>
			    <textarea className="textStyleU" name="tarefas" id="tarefas" rows="5" placeholder="Sem Vinculo com Tarefas ...     Máximo de 5 tarefas"></textarea>

          		<button className="botaoU" type="submit">Cadastrar</button>
        	</form> 
		</div>
	);
}

export default Usuario;