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

console.log(articulos);

//Metodos
var arrArticulosCheap = articulos.filter(function(articulo){
    return articulo.costo <=500;
});

console.log(arrArticulosCheap);

var articulosNombre = articulos.map(function(articulo) {
    return articulo.nombre;
});

console.log(articulosNombre);