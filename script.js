function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display=="none"){
        div.style.display="flex";
    }
    else{
        div.style.display="none";
    }}


    const imagenes = document.getElementsByClassName('card-group'); 

    Array.from(imagenes).forEach((imagen) => {
        imagen.addEventListener('mouseover', () => {
            imagen.classList.add('resaltado');
        });
    
        imagen.addEventListener('mouseout', () => {
            imagen.classList.remove('resaltado');
        });
    });
    