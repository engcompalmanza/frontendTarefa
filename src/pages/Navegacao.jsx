import "../css/Navegacao.css";

import iconeUsuario from "../img/usuario.png";
import logo from "../img/logo.png";

function Navegacao(){
	return(
		<nav className="navegacao">
			<a href="/"><img src={logo} alt="logo" width="70" height="auto"/></a>
			<ul className="navegacao__lista">
				<li><a className="link" href="/">Home</a></li>
				<li><a className="link" href="/projeto">Projeto</a></li>
				<li><a className="link" href="/tarefa">Tarefa</a></li>
				<li><a className="link" href="/usuario">Usuario</a></li>
				<li><a className="link" href="/gerenciamento">Gerenciamento</a></li>
			</ul>
			<div><img src={iconeUsuario} alt="icone do usuario" width="50" height="auto"/></div>
		</nav>
	);

}

export default Navegacao;