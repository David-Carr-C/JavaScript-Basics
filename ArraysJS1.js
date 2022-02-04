//Arrays
var frutas = ["Apple", "Banana", "Cherry", "Strawberry"];

console.log(frutas);

//Index
console.log(frutas.length);

console.log(frutas[0]);

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Metodos
frutas.push("Grape");
console.log(frutas);

var ultimo = frutas.pop();
console.log(ultimo);
console.log(frutas);

frutas.unshift("Orange");
console.log(frutas);

var primero = frutas.shift();
console.log(primero);
console.log(frutas);

var posicion = frutas.indexOf("Cherry");
console.log("Cherry ["+posicion+"]");