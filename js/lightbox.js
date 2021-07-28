const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
// const clos = document.querySelector('.close');
const hamburguer1 = document.querySelector('.hamburguer');

// Etraemos la direceccion de las imagenes
imagenes.forEach( imagen =>{
	imagen.addEventListener('click', ()=>{
		aparecerImagen(imagen.getAttribute('src'));
	})
});

//Cerrar el lightBox
contenedorLight.addEventListener('click',(e)=>{
	// && e.target=== clos
	if (e.target!== imagenesLight) {
		contenedorLight.classList.toggle('show');
		imagenesLight.classList.toggle('showImage');
			hamburguer1.style.opacity = '1';
	}
})
//mostramos el contenedor del lightbox
const aparecerImagen = (imagen)=>{
	imagenesLight.src = imagen;
	contenedorLight.classList.toggle('show');
	imagenesLight.classList.toggle('showImage');
	hamburguer1.style.opacity = '0';
}