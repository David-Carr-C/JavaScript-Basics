//Condicionales

//If
if (true) {
    console.log("It is true!");
}

if (false) {
    console.log("It is false");
}

//If - Else
var a = 40, b = 40;
if (a==b) {
    console.log("Yeah!," + a + " is equals to " + b);
} else {
    console.log("No, " + a + " is not equals to" + b);
}

//Else if

var x = 'a',y = 'b',z = 'c';
if (x=='a') {
    console.log("Option 1");

} else if (y=='b') {
    console.log("Option 2");
    //No se mostrara porque solo puede tomar esta opcion si la anterior no se cumple

} else if (z=='c') {
    console.log("Option 3");
    //No se mostrara porque solo puede tomar esta opcion si la anterior no se cumple
    //En este caso la primera opcion se cumple asi que no se pasara por esta opcion
} else {
    console.log("No options");
    //Si todas las demas opciones no se cumplieron
}

//IF
if (y=='b') {
    console.log("Option 2");
}
if (z=='c') {
    console.log("Option 3");
}
if ( y!='b' && z!='c') {
    console.log("No options");
}

//Ternary
var js = "Me gusta la programacion";

js==="Me gusta la programacion" ? console.log("Let's programming!") : console.log("\"\"");