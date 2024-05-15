import "../css/Projeto.css";

function Projeto(){
	return(
		<div className="projeto">
			<form className="formularioP">
          		<h2>Cadastro de Projeto</h2>
          		<p className="camposObrigatoriosP">Campos marcados com * são obrigatórios.</p>
          		<input className="inputStyleP" id="titulo" name="titulo" type="text" placeholder="* Título do Projeto" />
          		<textarea className="textStyleP" name="desc" id="desc" rows="5" placeholder="Insira uma breve descrição do projeto ..."></textarea>
          		<button className="botaoP" type="submit">Cadastrar</button>
        	</form> 
		</div>
	);
}

export default Projeto;