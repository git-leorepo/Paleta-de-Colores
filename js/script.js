/*ELEMENTOS DEL DOM*/

//Elemento Contenedor del DOM
const divContenedor = document.querySelector('.contenedor')
//Elemento Agregar Color del DOM
const btnAgregarItem = document.getElementById('botonAgregarColor')
//Elemento Generar Paleta en DOM
const btnGenerarPaleta = document.getElementById('botonGenerarPaleta')
//Arreglo de colores para paletas 


/*FUNCIONES*/

//Funcion generar aleatorio

function generarAleatorio(){
    let aleatorio_paleta = Math.floor(Math.random()*23);
    return aleatorio_paleta;
}

//Funcion Añadir Item: Genera un nuevo div con propiedades definidas

// el contador empieza en 6 porque inicialmente la paleta tiene 5 colores
let contadorColor = 6
// creo la variable let que va a cambiar con la funcion añadirItem
let nuevoItem

function anadirItem(){
    //maximo puedo adicionar 9 colores
    
    
}


//Funcion cambiar color: Cambia de paleta de colores al darle clic al boton







