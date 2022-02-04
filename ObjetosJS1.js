//Objects

var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleDelAuto: function() {
        return "Auto: "+this.marca +" "+ this.modelo;
    }
};

console.log(auto);

console.log(auto.anio);

console.log(auto.detalleDelAuto());