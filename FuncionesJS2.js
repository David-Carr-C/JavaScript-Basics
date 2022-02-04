function saludarEstudiante(estudiante) {
    console.log(estudiante);
}

saludarEstudiante("David");

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("David");

/*
En la demostracion, el navegador solo ejecuta la ultima 
funcion que fue declarada con el mismo nombre
*/

/*
Para reparar esto, hare una funcion y una variable con una 
funcion anonima
*/

var saludarEstudiante = function (estudiante) {
    console.log(estudiante);
    let retorno = "Saludos!";
    return retorno;
}

//saludarEstudiante("David");               //No ocupando el retorno
console.log(saludarEstudiante("David"));    //Ocupando el retorno

let queSeObtuvo = saludarEstudiante("David");//Ocupando el retorno
//Forma "completa" para ver el funcionamiento de una variable que contiene una funcion 
console.log(queSeObtuvo);                    //Ocupando el retorno

/*
Pero entonces, que guarda la variable funcion?, o solo 
guarda una funcion anonima?, para que sirve?
*/