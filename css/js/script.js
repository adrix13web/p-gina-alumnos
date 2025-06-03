function saludar() {
  let nombre = document.getElementById("nombre").value;

  if (nombre.trim() === "") {
    document.getElementById("mensaje").innerText = "Por favor, escribe tu nombre.";
  } else {
    document.getElementById("mensaje").innerText = "¡Hola, " + nombre + "! Bienvenida ✨";
  }
}

function cambiarImagen() {
  let imagen = document.getElementById("imagen");

  if (imagen.src.includes("gatito.jpg")) {
    imagen.src = "img/perrito.jpg";
  } else {
    imagen.src = "img/gatito.jpg";
  }
}
