//Objects

var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleDelAuto: function() {
        return "Auto: "+this.marca +" "+ this.modelo;
    }
};

//Constructor
function ConstructorAuto(marca,modelo,anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new ConstructorAuto("Tesla", "Model S",2020);

console.log(autoNuevo.modelo);

console.log(autoNuevo);

console.log(auto);