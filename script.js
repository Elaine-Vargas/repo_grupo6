function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display=="none"){
        div.style.display="flex";
    }
    else{
        div.style.display="none";
    }}


const imagen = document.getElementById('gclass'); 

imagen.addEventListener('mouseover', () => {

});

imagen.addEventListener('mouseout', () => {
        imagen.classList.remove('resaltado');
});