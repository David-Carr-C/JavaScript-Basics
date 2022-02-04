//Loop

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log("Hello "+estudiante);
}

//For of
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}