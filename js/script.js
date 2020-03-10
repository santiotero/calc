/* 
	Script - Santiago Otero
*/

var numA = 0;
var numB = 0;
var oper = null;
var resultado = 0;

window.onload = function(){

	document.getElementById("numeros").value = 0;
	
	var opers = document.getElementsByClassName("_operaciones");	
	for(i=0;i<opers.length;i++){
		let ele = opers[i];
		ele.addEventListener("click", function(){foper(ele)}); 
	}

	var valores = document.getElementsByClassName("_valores");	
	for(i=0;i<valores.length;i++){
		let elem = valores[i];
		elem.addEventListener("click", function(){escribirNumero(elem)}); 
	}

	document.getElementById("total").addEventListener("click", function(){fresultado(oper)});

	document.getElementById("borrar").addEventListener("click", function(){borrar(oper)}); 

}

function foper(elem){	
	numA = document.getElementById("numeros").value;
	oper = elem.name;
	document.getElementById("numeros").value = 0;
}

function escribirNumero(elem){
	let num = document.getElementById("numeros");
	num.value = parseInt(num.value + '' +  elem.value);	
}

function borrar(){
	document.getElementById("numeros").value = 0;
	numA = 0;
	numB = 0;
	oper = null;
	resultado = 0;
}

function fresultado(operacion){

	numB = document.getElementById("numeros").value;

	switch(operacion){
		case 'suma':
			resultado = parseInt(numA) + parseInt(numB);
		break;

		case 'resta':
			resultado = parseInt(numA) - parseInt(numB);
		break;

		case 'mult':
			resultado = parseInt(numA) * parseInt(numB);
		break;

		case 'div':
			resultado = parseInt(numA) / parseInt(numB);
		break;

		default:
			//alert('operacion no permitida');
			null;
			resultado = 0;
		break;
	}

	document.getElementById("numeros").value = resultado;

}