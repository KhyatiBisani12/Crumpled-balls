
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var groundSprite;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	paper = createSprite(50,640,20,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
	}
}

