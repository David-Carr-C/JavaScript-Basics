function ConstructorAuto(marca,modelo,anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var marcas = ["Tesla","Toyota","BMW", "Audi", "Ferrari"];
var modelos = ["Model S", "Corello", "S-MA","TT","Gran Turismo"];
var anios = [2021,2020,2018,2016,1950];

var autos = [];

for (let i = 0; i < marcas.length; i++) {
    var nuevoAuto = new ConstructorAuto(/*"Tesla"*/marcas[i],/*"Model X"*/modelos[i], /*2020*/anios[i]);
    autos.push(nuevoAuto);
}

console.log(autos);