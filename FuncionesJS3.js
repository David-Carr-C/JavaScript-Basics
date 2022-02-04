function sumar(a,b) {
    var resultado = a+b;
    return resultado;
}

console.log(sumar(2,2));

var nombre = function(nombre) {
    console.log(`Hola ${nombre}`);
    //return nombre;        //Bastante curioso
}

nombre(nombre("David"));