
// Medidas del mapa
const WIDTH = 400
const HEIGH = 400   

//Boleano para detener la cuenta regresiva al ganar
let win = false 

let cantidadClicks  
let numeroDeJuego = 0
let mayorRecordClicks = 0 
let mapa = document.getElementById('mapa')
let cartelDistancia = document.getElementById('distancia') 
let juego = document.getElementById('Juego')
let cartelPresentacion = document.getElementById('Presentacion') 
let cartelGanador = document.getElementById('cartelGanador') 
let tituloCartel = document.getElementById('cardTitle')
let cartelPerdedor = document.getElementById('lostGame')
let cartelRecords = document.getElementById('tablaRecords') 
let botonRecord = document.getElementById('botonRecord')   
let podio = document.getElementById('Podio') 

let punto ={
    x: 0,
    y: 0
}; 


mapa.addEventListener('click', (e)=>{ 
    
    cantidadClicks++ 
    let distancia = obtenerDistancia(e, punto) 
    let pistaDistancia = obtenerPistaDistancia(distancia) 
    let emoji = obtenerEmojiDistancia(pistaDistancia)  
    cartelDistancia.innerHTML = `<h1>${pistaDistancia} <img width="40" height="40" src=${emoji}></h1>` 

    if(distancia <20){  

        mostrarCartelGanador(cantidadClicks)
        imprimirFilaRecord(numeroDeJuego, cantidadClicks)  //Se agrega a tabla de todos los records
        agregarColeccionRecords(numeroDeJuego, cantidadClicks)  //Se agrega a coleccion de records para calcular el podio
        win = true; 

    }
});  