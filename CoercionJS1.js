//Coerción

//Coercion Implicitas
console.log(4+"7");
console.log(4*"7");
console.log(2+true);
console.log(false-3);

//Coercion Explicita
var a = 27;
var coe = String(a);
console.log("La variable [coe] es: " + coe + " y es un: " + typeof(coe));
var coe2 = Number(coe);
console.log("Ahora la variable [coe2] es: " + coe2 + " y es un: " + typeof(coe2));