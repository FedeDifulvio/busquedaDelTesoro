let arrayRecords =[] 


let mostrarRecords= ()=>{

   cartelGanador.style.visibility = 'hidden'
   cartelRecords.style.visibility ='visible' 
   botonRecord.style.visibility ='visible' 

} 

let mostrarPodioRecords =() =>{
    
   cartelGanador.style.visibility = 'hidden'
   podio.style.visibility = 'visible' 
   botonRecord.style.visibility ='visible' 

}


let imprimirFilaRecord =(numJuego, clicks)=>{ 
    
   let tabla = document.getElementById('tabla')
   let emojiTable = obtenerEmojiTable(clicks) 
  
   tabla.innerHTML+=`<tr>
   <td>${numJuego}</td>
   <td>${clicks}  <img src="${emojiTable}"  width="30" height="30" alt=""></td> 
   </tr>` 

   
}  

let obtenerEmojiTable = clicks =>{
   if(clicks<3){
      return "img/alien.png"
   } 
   else if(clicks<10){

      return "img/fuego.jpg"

   } else if(clicks<20){ 

      return  "img/feliz.png"
   }
   else{
         return "img/mano.jpg" 
   }
}

let agregarColeccionRecords = (numJuego, clicks)=>{
  
   arrayRecords.push({
      juego: numJuego, 
      cantClicks : clicks
   }) 

   calcularPodioRecords(arrayRecords)
   
} 


let calcularPodioRecords = array =>{ 
  
   if(array.length >= 3){ 
      
      array.sort((a,b)=>{
         if(a.cantClicks>b.cantClicks){
            return 1
         } 
         if(a.cantClicks<b.cantClicks){
          return -1
       } 
       return 0
      }) 
    
      let primerPuesto = array[0]
      let segundoPuesto = array[1]
      let tercerPuesto = array[2] 
    
      podio.innerHTML = `
      <tr>
         <th> Puesto </th>
          <th> Juego </th> 
          </tr>
      <tr>
       <td>1°</td>
      <td> ${primerPuesto.juego} - ${primerPuesto.cantClicks} Clicks </td>  
      </tr> 
      <tr>
        <td>2°</td>
        <td> ${segundoPuesto.juego} - ${segundoPuesto.cantClicks} Clicks </td>  
      </tr>
      <tr>
         <td>3°</td>
         <td> ${tercerPuesto.juego} - ${tercerPuesto.cantClicks} Clicks </td>  
      </tr>
      ` 
   } 
   else{
        podio.innerHTML = `<h1>Podio no disponible hasta completar tres victorias </h1>`  
   }


}
