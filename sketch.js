/*var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background("white");  

  if(car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+height/2
    && wall.y-car.y<car.height/2+wall.height/2){

    car.velocityX=0;

    var deformation =0.5*weight*speed*speed/22509;

    if(deformation>180){

      car.shapeColor="yellow";
    }

    if(deformation<180){

      car.shapeColor="green";
    }

    if(deformation<100){

      car.shapeColor="red";
    }

  }

  drawSprites();
}*/


/*
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var you1,you2,bg;

var jeryupimg,jeryupimg2,bgimg;

var Chain,bg1,bg2;

//var particles = [];

var particles;

function preload(){

  jeryupimg=loadImage("jery up.png");
  jeryupimg2=loadImage("jery up.png");
  //bgimg=loadImage("bg.png");

}

function setup() {
  createCanvas(1500,900);

  engine = Engine.create();
	world = engine.world;

  bg1=new back(1070,450,700,900);
 bg2=new back(448,450,700,900);
 
  /*bg=createSprite(width/2/2,height/2,200,200);
  bg.addImage("image",bgimg);
  bg.scale=0.4;
  
  /*you1=createSprite(250,750,10,10);
  you1.addImage("image",jeryupimg);
  you1.scale=0.2;

  you2=createSprite(650,750,10,10);
  you2.addImage("image",jeryupimg);
  you2.scale=0.2;*/

  /*you1=new you(300,750,200,200);
  you2=new you(1200,750,200,200);

  Chain=new chain(you1.body,you2.body);

  Engine.run(engine);

}

function draw() {
  background(49,55,49);  

  Engine.update(engine);

  bg1.display();
  bg2.display();

  Chain.display();
  you1.display();
  you2.display();  */

  /*if(frameCount%60===0){
    particles.push(new Particle(random(240,660),200, 90,90));
  
  }

 /*for (var i = 0; i < particles.length; i++) {
  
    particles[i].display();
  }*/
  
  /*for(var i=height/2;i<0;i=i+50){

    particles=new Particle(random(240,660),i, 90,90);

  }

  for (var i = height/2; i < 0; i=i+50) {
  
    particles[i].display();
  }

  drawSprites();
}*/




/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg1img,bg2img;
var bg1,bg2;
var l1,l2;


function preload(){


   bg1img=loadImage("bg1.jpg");
   bg2img=loadImage("bg1.jpg");
}

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
	world = engine.world;

  l1=createSprite(0,height/2,5,1000000000000000000000000000000000000);
  l1.shapeColor="red";
  l2=createSprite(400,height/2,5,10000000000000000000000000000000000);
  l2.shapeColor="red";

bg=new back(width/2+50,height-7800,900,800*20);

 y1=createSprite(100,400,30,30);
 
 y2=createSprite(300,400,30,30);
 

  Engine.run(engine);

}

function draw() {
  background("black");  

  Engine.update(engine);

bg.display();
  
 /* camera.x=y1.x+100;
  camera.y=y1.y;*/

 /*if(keyDown(UP_ARROW)){

  y1.y=y1.y-10;
 }
 if(keyDown(LEFT_ARROW)){

  y1.x=y1.x-5;
 }*/

 /*if(keyDown(DOWN_ARROW)){

  y1.y=y1.y+10;
 }*/
 /*if(keyDown(RIGHT_ARROW)){

  y1.x=y1.x+5;
 }

  drawSprites();

}*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var trackimg,track , car1_img, car2_img, car3_img, car4_img;
var b1,b2;

function preload(){
  trackimg = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
 /* car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");*/
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);

  engine = Engine.create();
	world = engine.world;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  Engine.run(engine);
}


function draw(){

  Engine.update(engine);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

