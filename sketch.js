var database;
var gameState;
var playerCount1
var form,game,player


function setup(){

canvas=createCanvas(400,400);
database=firebase.database();
//first step to create game object
game=new Game()
game.getState() //it will return 0
game.start() //it will call start method of game

}

