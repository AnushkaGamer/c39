var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var distance=0;
var car4, car1, car2, car3, cars;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background (200,200,255);
  if(playerCount===4){
   game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
