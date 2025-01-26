// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo").value;
    console.log(`nombre ingresado : ${nombreUsuario}`);

    // Si el nombre ingresado por el usuario está vacío
    if (nombreUsuario == "") {
        alert("Por favor, inserte un nombre");
        return;
    } else {
        amigos.push(nombreUsuario);
        console.log("lista nombres tiene  " + amigos.length + (amigos.length == 1 ? " nombre" : " nombres"));       
        // Limpiar cajita
        document.getElementById("amigo").value = "";

        actualizarListaAmigos();
    }
    
}

function actualizarListaAmigos(){
    // Obtener el elemento lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista
    lista.innerHTML = "";

    // Recorrer array amigos para agregarlos a un elemento <li> dentro de <ul>
    for (let i = 0; i < amigos.length ; i++ ){
        // Obtener el nombre de la posición 
        let nombre = amigos[i];

        // Crear el elemento li 
        let elementoLista = document.createElement("li");

        // Agregar contenido a li
        elementoLista.innerHTML = nombre;

        // Añadir elemento a la lista 
        lista.appendChild(elementoLista);
    }

}

function sortearAmigo(){
    // Obtener posición del array aleatorio
    let numeroAleatorio = parseInt(Math.floor(Math.random() * amigos.length));

    console.log("numero aleatorio es: " + numeroAleatorio);

    if (amigos.length == 0) {
        alert("Primero debes ingresar nombres");
        return;
    }
    
    let nombreAleatorio = amigos[numeroAleatorio]

    document.getElementById("resultado").innerHTML=(`El amigo ganador es: ${nombreAleatorio}`);

}