//Hoisting

//Declarar
var miNombre;
//Asignar
miNombre = "David";

//EcmaScript:

console.log(miApellido);
var miApellido = "Carrillo";        //El navegador estaria regresando "undefined"

//Esto es debido a que el navegador lo interpreta de la siguiente manera:
var mi4pellido = undefined;
//Se da cuenta que console.log() va a buscar una variable que se llama apellido
//asi que primero la declara (como undefined) y despues le asigna lo que el desarrollador queria
//Pero al ser ocupada la variable antes de que se llegue a la instruccion donde se le asigna su
//contenido, entonces sale "undefined" en la consola
console.log(mi4pellido);
mi4pellido = "Carrillo";