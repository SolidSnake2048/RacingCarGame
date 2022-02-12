var ball;
var database;
var gameState=0;
var playerCount;
var form;
var game;
var player;
var canvas;
var allPlayers;
var cars;
var car1,car1Image;
var car2,car2Image;
var car3,car3Image;
var car4,car4Image;
var trackImage;
var gameEnd;
function preload(){
   car1Image=loadImage("car1.png");
   car2Image=loadImage("car2.png");
   car3Image=loadImage("car3.png");
   car4Image=loadImage("car4.png");
   trackImage=loadImage("track.jpg");
}
function setup(){
    database=firebase.database();
    canvas=createCanvas(displayWidth-20,displayHeight-30,);

    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
        clear();
        game.play();
    }
    if(gameState==2){
        game.end();
    }
}
//hay que ver el form

