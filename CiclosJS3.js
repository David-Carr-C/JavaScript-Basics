//Loop

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hello ${estudiante}`);
}

//While
while (estudiantes.length > 0) {
    saludarEstudiantes( estudiantes.shift() );
}