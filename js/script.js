/*ELEMENTOS DEL DOM*/

//Elemento Contenedor del DOM
const divContenedor = document.querySelector('.contenedor')
//Elemento Agregar Color del DOM
const btnAgregarItem = document.getElementById('botonAgregarColor')
//Elemento Generar Paleta en DOM
const btnGenerarPaleta = document.getElementById('botonGenerarPaleta')
//Arreglo de colores para paletas 
const paletaUno = ["#FFC2D1","#FFE5B4","#FFF4BD","#C2F0D5","#BDEFF4","#D1E9FF","#E0D7FF","#F4D7F4","#E6E9ED"]
const paletaDos = ["#0077B6","#00B4D8","#90E0EF","#CAF0F8","#F4D35E","#E9C46A","#F4A261","#D4A373","#FAF9F6"]


/*FUNCIONES*/

//Funcion Añadir Item: Genera un nuevo div con propiedades definidas

// el contador empieza en 6 porque inicialmente la paleta tiene 5 colores
let contadorColor = 6
// creo la variable let que va a cambiar con la funcion añadirItem
let nuevoItem

function anadirItem(){
    //maximo puedo adicionar 9 colores
    if(contadorColor<10){
        //Crear un nuevo Div
        const nuevoItem = document.createElement('div')
        //Crear el item, asigno el nombre item
        nuevoItem.textContent = 'item '+contadorColor
        //Asigno la clase colores al nuevo item
        nuevoItem.classList.add('colores')
        //le asigno un atributo name a la columna colores
        nuevoItem.setAttribute('name', 'c'+contadorColor);
        //le asigno un color vacio
        nuevoItem.style.backgroundColor = "";
        //crea el objeto Item
        divContenedor.appendChild(nuevoItem)
        
        contadorColor++
    }else{
        //AL haber añadido maximo 9 solores me genera un mensaje de alerta
        alert('No puedes generar mas colores')
    }
}




