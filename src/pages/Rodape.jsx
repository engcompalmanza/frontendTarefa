import "../css/Rodape.css";

import programador from "../img/programador.png";

function Rodape(){

	return(
		<div className="rodape">
			<img src={programador} alt="icone do desenvolvedor" width="40" height="auto"/>
			<p>Desenvolvido por José Carlos Marino Almanza</p>
		</div>
	);
}

export default Rodape;