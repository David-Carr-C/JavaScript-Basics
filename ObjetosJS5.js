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
var articulosEncontrados = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(articulosEncontrados);

articulos.forEach(element => {
    console.log(element.nombre);
});

articulos.forEach(function(articulo){
    console.log(articulo.costo);
});

var boolArticulosCheap = articulos.some(function(articulo){
    return articulo.costo <= 500;
});

console.log(boolArticulosCheap);