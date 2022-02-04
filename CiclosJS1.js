//Loop
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log("Hello "+estudiante);
}

//For each
estudiantes.forEach(element => {
    saludarEstudiantes(element);
});


//For
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
    
}