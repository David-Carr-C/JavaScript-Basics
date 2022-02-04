//Hoisting part 2

saludar();

function saludar() { //Funcion declarativa
    console.log("Hello JavaScript");
}
//El resultado de la consola es: Hello JavaScript
//Pero el hoisting es diferente cuando se ocupa una funcion de expresion

despedida();

var despedida = function () { //Funcion de expresion
    console.log("Adios JavaScript");
}
//Error!, debido a que con las funciones de expresion forzosamente se necesitan declarar antes de
//su llamado


/*
Como buena practica siempre se declaran las funciones antes de llamarlas, y siempre al principio
del archivo
*/