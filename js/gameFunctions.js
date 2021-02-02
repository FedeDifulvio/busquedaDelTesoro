

let obtenerNumeroRandom = limite => {
    return Math.floor(Math.random() * limite);
  }  

  let obtenerDistancia = (e, punto)=>{
    let diferenciaX = e.offsetX - punto.x
    let diferenciaY =e.offsetY - punto.y 

    let distancia = Math.sqrt(Math.pow(diferenciaX, 2) + (Math.pow(diferenciaY, 2)))

    return distancia 
   } 

    let obtenerPistaDistancia = distancia =>{
        if(distancia < 30) {
            return "¡Hirviendo!"
        } else if(distancia < 40) {
            return "¡Muy Caliente!" 
        } else if(distancia < 60){
            return "¡Caliente!"
        } else if(distancia < 100){
            return "Tibio"
        } else if(distancia< 200){
            return "Frío"
        }else if(distancia < 400 ){
            return "Congelado"
        } else{
            return "Congelado" 
        }
         
    }  

    let obtenerEmojiDistancia = distancia =>{ 
    
        switch (distancia){
            case "Congelado" : return "img/emojiCongelado.png" 
            break; 
            case "Frío" : return "img/emojiFrio.png"  
            break;
            case "Tibio": return "img/emojiTibio.png" 
            break; 
            case "¡Caliente!": return "img/emojiCaliente.png"  
            break; 
            case "¡Muy Caliente!": return "img/emojiMuyCaliente.png" 
            break; 
            case "¡Hirviendo!" : return "img/emojiHirviendo.png" 
            break; 
        }   
    } 

    let mostrarCartelGanador = Clicks =>{
        
        juego.style.visibility ='hidden' 
        podio.style.visibility = 'hidden'              /* Cartel de Records, podio y boton */
        cartelRecords.style.visibility ='hidden'   /*  se ocultan para cuando se presiona volver */
        botonRecord.style.visibility ='hidden'
        cartelGanador.style.visibility ='visible'  
        
        if(Clicks == 0){
            tituloCartel.innerHTML = ` `
            return 
        }
        if(numeroDeJuego===1) {
            mayorRecordClicks = Clicks
        } 

        if(Clicks<mayorRecordClicks && numeroDeJuego>1){ 

            mayorRecordClicks = Clicks 
            tituloCartel.innerHTML = `¡Nuevo récord de ${Clicks} Clicks!`
        } 
        else{
            tituloCartel.innerHTML = `Lo lograste luego de ${Clicks} Clicks.`
        }         
    } 

    

    let cuentaRegresiva = (tiempo)=>{ 
        let contador = document.getElementById('cuentaRegresiva')
        contador.innerHTML = tiempo
        let count = setInterval(()=>{
           tiempo-- 
           contador.innerHTML = tiempo 
           if(contador.innerHTML == 0){ 
               lostGame();
               clearInterval(count)     
            } 
            if( win === true){
               clearInterval(count)     
            }
        }, 180) 
        
       
    } 

    let iniciarJuego =()=>{  

        punto.x = obtenerNumeroRandom(WIDTH)
        punto.y = obtenerNumeroRandom(HEIGH) 
        numeroDeJuego++ 
        cantidadClicks = 0 
        cartelPresentacion.style.visibility ='hidden' 
        cartelPerdedor.style.visibility ='hidden' 
        cartelGanador.style.visibility = 'hidden'
        cartelRecords.style.visibility ='hidden'
        podio.style.visibility = 'hidden'  
        botonRecord.style.visibility ='hidden' 
        juego.style.visibility ='visible' 
        cartelDistancia.innerHTML = ""
        win = false 
        cuentaRegresiva(120)   
       
    } 

    let lostGame = ()=>{
        juego.style.visibility ='hidden'
        cartelPerdedor.style.visibility ='visible'  
    }