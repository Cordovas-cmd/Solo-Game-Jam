var playerOneHP = 100;
var playerOneAtk = 10;
var playerOneMoney = 10;
var playerName;

var player1 = {
    name: "",
    hitpoints: 100,
    attack: 10,
    money: 10,
}
var player2 = {
    name: "Roborto",
    hitpoints: 50,
    attack: 12,
}

player1.name = window.prompt("What is your robot's name?");
// console.log(playerName);
console.log(player1);

function fight() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    player2.hitpoints = player2.hitpoints - player1.attack;

    // Log a resulting message to the console so we know that it worked.

    console.log(
        player1.name + " attacked " + player2.name + ". " + player2.name + " now has " + player2.hitpoints + " health remaining."
      );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    player1.hitpoints = player1.hitpoints - player2.attack;

    // Log a resulting message to the console so we know that it worked.

    console.log(
        player2.name + " attacked " + player1.name + ". " + player1.name + " now has " + player1.hitpoints + " health remaining."
      );
}
fight();