//Condicionales

//Switch
var who = ["piedra", "papel" ,"tijeras"];
var user = "tijeras"; //It's going to be an input user
var npc = who[2]; //It's going to be a IA

switch (user) {
    case who[0]:
        console.log("You lose!");
        break;
    case who[1]:
        console.log("Tie :)");
        break;
    case who[2]:
        console.log("You win!");
        break;
    default:
        console.log("Error!");
        break;
}