function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none") {
      div.style.display = "block"; // Mostrar el contenido
    } else {
      div.style.display = "none"; // Ocultar el contenido
    }
  }
