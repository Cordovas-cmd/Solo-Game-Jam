
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

// player1.name = window.prompt("What is your robot's name?");
// console.log(playerName);
// console.log(player1);


function fight() {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If statements that trigger depending on what the player chose to do
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by subtracting the amount set in the playerAttack variable

        player2.hitpoints = player2.hitpoints - player1.attack;
        console.log(
            player1.name + " attacked " + player2.name + ". " + player2.name + " now has " + player2.hitpoints + " health remaining."
        );
        // check enemy's health
        if (player2.hitpoints <= 0) {
            window.alert(player2.name + " has died!");
        }
        else {
            window.alert(player2.name + " still has " + player2.hitpoints + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        player1.hitpoints = player1.hitpoints - player2.attack;

        console.log(
            player2.name + " attacked " + player1.name + ". " + player1.name + " now has " + player1.hitpoints + " health remaining."
        );
        // check player's health
        if (player1.hitpoints <= 0) {
            window.alert(player1.name + " has died!");
        }
        else {
            window.alert(player1.name + " still has " + player1.hitpoints + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(player1.name + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
        fight()
    }

}
function init() {
    player1.name = window.prompt("What is your robot's name?");
// console.log(playerName);
console.log(player1);
window.alert("Welcome to Robot Gladiators!");

fight()
}

init()