const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow

function preload(){
  img=loadImage("sprites/snow1.jpg");
  img1=loadImage("sprites/Girl.jpg");
}

function setup() {
  createCanvas(1000,800);
  //snow= createSprite(400,400,400,20)
}

function draw() {
 background(255,0,0,255);
 image(img, 0, 0,1000,800);
 image(img1, 250, 450,100,120);
 drawSprites();
}