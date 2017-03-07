
var user = prompt("Bienvenida! \n\n ¿Cuál es tu nombre?");

var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
							 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
							 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
							 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
							 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
							 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
							 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
							 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

mostrarCoders = () => {
								for (var i in coders) {
							 												document.getElementsByClassName("div-coder")[i].innerHTML +=
																			"<p> Nombre: "+coders[i].nombre+"</p>"+
										 							    "<p> Apellido: "+coders[i].apellido+"</p>"+
										 							   	"<p> Promoción: "+coders[i].promocion+"</p>"+
										 							    "<p> Estado: "+coders[i].estado+ "</p>";
										 									}
								};mostrarCoders();

home = () => { document.location.href = "index.html"; }

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
