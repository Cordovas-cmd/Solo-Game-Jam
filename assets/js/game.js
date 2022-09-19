var playerOneHP = 100;
var playerOneAtk = 10;
var playerOneMoney = 10;
var player1 = {
    hitpoints: 100,
    attack: 10,
    money: 10,
}
var player2 = {
    hitpoints: 50,
    attack: 12,
}

var playerName = window.prompt("What is your robot's name?");
console.log(playerName)

function fight() {
    window.alert("The fight has begun!");
}
// fight();