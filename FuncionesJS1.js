// Declarativas
function miFuncion() {
    return 3;
}

miFuncion();                       //Nombre de la funcion y entre parentesis

document.write(miFuncion());

// Expresion
var miFuncion = function (a,b) {   //Funcion anonima
    return a + b;
}

miFuncion();                       //Nombre de la variable y entre parentesis

document.write(" ");
document.write(miFuncion(4,5));


/*
function nameFunc (parameter1, parameter2) {
    code or return
}
*/