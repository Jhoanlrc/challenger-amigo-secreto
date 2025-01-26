// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo").value;
    console.log(`nombre ingresado : ${nombreUsuario}`);

    // Si el nombre ingresado por el usuario está vacío
    if (nombreUsuario == "") {
        alert("Por favor, inserte un nombre");
        return;
    } else {
        listaNombres.push(nombreUsuario);
        console.log("lista nombres tiene  " + listaNombres.length + (listaNombres.length == 1 ? " nombre" : " nombres"));       
        // Limpiar cajita
        document.getElementById("amigo").value = "";
    }
    
}


