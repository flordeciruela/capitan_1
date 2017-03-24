
//Funcion para guardar user:
var myParam = location.search.split('nombre=')[1]
var nombre = document.getElementById('usuario');

		if (myParam == undefined) { // Si esta vacio solicitar nombre
			 var inicio = prompt('Cual es tu nombre');
			 inicio = inicio.toString().toLowerCase();
			 inicio = inicio.charAt(0).toUpperCase()+inicio.slice(1);
			 nombre.innerHTML = inicio;
		} else { //Sino mostar nombre almacenado
			 nombre.innerHTML = myParam;
		}

 document.getElementById("coders").addEventListener('click',function() {
		 this.href += "?nombre="+nombre.innerHTML;
 });

//Drop
function myFunction() {
											 document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {

								 if (!event.target.matches('.dropbtn')) {
										var dropdowns = document.getElementsByClassName("dropdown-content");
										var i;

									 	for (i = 0; i < dropdowns.length; i++) {
											var openDropdown = dropdowns[i];
										  if (openDropdown.classList.contains('show')) {
												  openDropdown.classList.remove('show');
										  }
									 }
								 }

}

var mostrar= function(elementId) {
	document.getElementById("sprint-1").style.display="none";
	document.getElementById("sprint-2").style.display="none";
	document.getElementById("sprint-3").style.display="none";
	document.getElementById(elementId).style.display="block";
}

//CORRECCION DE QUIZ SPRINT 1
var opcionesQuiz1= document.getElementsByClassName("quiz-1");
var contenedorQuiz1 = document.getElementById("contenedor-quiz1")
document.getElementById("enviar-sprint1").onclick=function(){
	var contestadas = 0;

	console.log(opcionesQuiz1)
	for(var i =0;i<9;i++){
		if(opcionesQuiz1[i].checked==true){
			contestadas++
		}
	}

	if(contestadas==3){
		var correctas = 0;
		if(opcionesQuiz1[0].checked){
			correctas++
		}
		if(opcionesQuiz1[4].checked){
			correctas++
		}
		if(opcionesQuiz1[8].checked){
			correctas++
		}
		contenedorQuiz1.innerHTML = "<p class='resultado-quiz'>Tienes " + correctas + " correctas";
	} else {
		alert("Todas las preguntas son obligatorias");
	}

}

//Quiz sprint 2:
var opcionesQuiz2= document.getElementsByClassName("quiz-2");
var contenedorQuiz2 = document.getElementById("contenedor-quiz2")
document.getElementById("enviar-sprint2").onclick=function(){
	var contestadas = 0;
	for(var i =0;i<9;i++){
		if(opcionesQuiz2[i].checked==true){
			contestadas++
		}
	}

	if(contestadas==3){
		var correctas = 0;
		if(opcionesQuiz2[1].checked){
			correctas++
		}
		if(opcionesQuiz2[3].checked){
			correctas++
		}
		if(opcionesQuiz2[7].checked){
			correctas++
		}
		contenedorQuiz2.innerHTML = "<p class='resultado-quiz'>Tienes " + correctas + " correctas";
	} else {
		alert("Todas las preguntas son obligatorias");
	}

}
