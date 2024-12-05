//paso 1: declaración de variable
let num1,num2;
let operacion;

//paso 2: función para realizar operaciones
function realizarOperacion(num1,num2){  //Iniciador de variables y funciones
    if(operacion === "suma"){   //condicional para la suma
        return num1+num2;       //Operación para sumar

    }else if(operacion === "resta"){ //condicional para la resta
        return num1 - num2;

    }else if(operacion === "multiplicacion"){
        return num1*num2;

    }else if (operacion ==="division"){
        if(num2 === 0){
            return "No se puede dividir entre 0"
        }
        return num1 / num2;
    }else{
        return "operacion no valida"
    }
}
//paso 3: Bucle para realizar multiples operaciones
while(true){
    //solicitar al usuario el primer numero 
    num1 = parseFloat(prompt("Ingresar el 1er digito (o escriba salir para terminar)"));

    //si la entrada no es un numero entonces q se termine el bucle
    if(isNaN(num1)){
        console.log("Adios");
        break;
    }
    //solicitar al usuario el segundo numero
    num2 = parseFloat(prompt("Ingresar el 2do digito"));
    
    //Si el segundo numero no es valido
    if(isNaN(num2)){
        console.log("Por favor ingresar un numero valido");
        continue; //regresar al inicio del while
    }
    //Solicitar al usuario que ingrese una operación deseada
operacion = prompt("Selecciona la operacion (suma, resta, multiplicacion, division)");

//Si el usuario decide salir terminar bucle
if(operacion === "salir"){
    console.log("Haz salido");
    break;
}

// Llama la función realizarOperacion con los datos proporcionados
const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
console.log(`Resultado: ${resultado}`);
}
