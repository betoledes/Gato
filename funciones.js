var turno = false;

function seleccionar(id){
	idcasilla = id
	if (turno == false) {
		document.getElementById(id).innerHTML = "x";
		turno = true;	
	}else{
		alert("Ya no te toca perro")
	}

	activar = document.querySelector('#listo')
	activar.style.opacity = "1";
}