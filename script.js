function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none") {
      div.style.display = "block"; // Mostrar el contenido
    } else {
      div.style.display = "none"; // Ocultar el contenido
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var botones = document.querySelectorAll('.oculta-muestra button');
    
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            if(this.textContent === 'ver más') {
                this.textContent = 'ver menos';
            } else if (this.textContent === 'ver menos') {
                this.textContent = 'ver más';
            }
        });
    });
});
