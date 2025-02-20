//Variables
let numeroSuperior = 1000;
let numeroSecreto = Math.floor(Math.random() * numeroSuperior) + 1;
let numeroUsuario =0;
let intentos =1;
//let palabraIntento = "intento";
let maximoIntentos = 3;
while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número por favor entre el 1 y ${numeroSuperior}:`));

    console.log(numeroSecreto);
    console.log(typeof(numeroUsuario));
    /*  
    Este codigo realiza la comparación de los números
    */
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades! Adivinaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1? 'intento' : 'intentos' }`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor");    
        }else{
            alert("El número secreto es mayor");    
        }
        //Increntamos el contador cuando no adivina
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraIntento = "intentos";
        if (intentos > 3) {
            alert(`Lo siento, no adivinaste, se terminaron los ${maximoIntentos} intentos`);
            break;
        }
        //alert("Lo siento, no adivinaste");

    }

    //alert('Hola Mundo'); Lo quitamos porque estorba

}