var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof;
//var rope1,rope2,rope3,rope4,rope5;
var startBobPositionX, startBobPositionY, bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	startBobPositionX=width/2;
	startBobPositionY=height/4+400;
	bobDiameter=70;

	roof = new Ground(width/2,200,width,30);
	bobObject1=new paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new paper(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new Chain(bobObject1.body, roof.body, -bobDiameter*2, 0);
	
	/*rope2=new Chain(bobObject2.body, );
	rope3=new Chain(bobObject3.body, );
	rope4=new Chain(bobObject4.body, );
	rope5=new Chain(bobObject5.body, );*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  /*rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();*/

  drawSprites();
 
}



