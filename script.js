function muestra_oculta(id) {
    let div = document.getElementById(id);
    let button = document.querySelector(`[onclick="muestra_oculta('${id}')"]`);
    
    if (div.style.display == "none") {
      div.style.display = "block"; // Mostrar el contenido
      button.textContent = "ver menos";
    } else {
      div.style.display = "none"; // Ocultar el contenido
      button.textContent = "ver más";
    }
  }