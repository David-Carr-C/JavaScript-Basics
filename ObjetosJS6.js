//Objects
var articulos = [
    {
        nombre: "Bicicleta",
        costo: 3548
    },
    {
        nombre: "Television",
        costo: 5000
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Celular",
        costo: 7500
    },
    {
        nombre: "Laptop",
        costo: 12500
    },
    {
        nombre: "Teclado",
        costo: 250
    },
    {
        nombre: "Audifonos",
        costo: 178
    }
]

//Vaciar un objeto
while (articulos.length > 0) {
    console.log(articulos.shift());
}

console.log(articulos);