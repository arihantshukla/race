var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,cars,car1Img,car2Img,car3Img,car4Img,trackImg
var form, player, game;

function preload(){
car1Img=loadImage("car1.png")
car2Img=loadImage("car2.png")
car3Img=loadImage("car3.png")
car4Img=loadImage("car4.png")
trackImg=loadImage("track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth-70,displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
