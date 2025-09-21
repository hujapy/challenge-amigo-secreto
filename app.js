// Creamos un arreglo vacío donde guardaremos todos los nombres ingresados por el usuario
let amigos = [];

// Función que se ejecuta cuando el usuario hace clic en "Añadir"
function agregarAmigo() {
    // Obtenemos el valor escrito en el input con id "amigo"
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // .trim() elimina espacios en blanco al inicio y al final

    // Validamos que el usuario haya escrito algo (no esté vacío)
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido."); // Mostramos un mensaje de alerta
        return; // Salimos de la función sin hacer nada más
    }

    // Agregamos el nombre al arreglo "amigos"
    amigos.push(nombre);

    // Limpiamos el input para que el usuario pueda escribir otro nombre
    input.value = "";

    // Llamamos a la función que actualiza la lista visible en la página
    mostrarLista();
}

// Función que actualiza la lista de nombres en pantalla
function mostrarLista() {
    // Obtenemos la referencia al <ul> con id "listaAmigos"
    let lista = document.getElementById("listaAmigos");

    // Limpiamos el contenido anterior de la lista
    lista.innerHTML = "";

    // Recorremos el arreglo "amigos" y agregamos cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Creamos un elemento <li>
        li.textContent = amigos[i]; // Le asignamos el nombre correspondiente
        lista.appendChild(li); // Lo agregamos dentro de la lista <ul>
    }
}

// Función que selecciona un amigo aleatoriamente
function sortearAmigo() {
    // Verificamos que la lista no esté vacía
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return; // Salimos de la función si no hay nombres
    }

    // Generamos un índice aleatorio entre 0 y la cantidad de amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre sorteado usando ese índice
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en el <ul> con id "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos resultados anteriores
    let li = document.createElement("li"); // Creamos un nuevo <li>
    li.textContent = "El amigo secreto es: " + amigoSorteado; // Texto con el nombre sorteado
    resultado.appendChild(li); // Agregamos el resultado en pantalla
}

