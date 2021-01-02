const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var roof,rope,rope1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,450,40)
	bob2=new Bob(240,450,40)
	bob3=new Bob(280,450,40)
	roof=new Roof(270,240,200,40)
  rope=new Rope(bob1.body,roof.body)
  rope1=new Rope(bob2.body,roof.body)
	//rope1=new Rope(bob,roof)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230)
  line(roof.x,roof.y,bob1.x,bob1.y)
  line(265,roof.y,bob2.x,bob2.y)
  line(260,roof.y,bob3.x,bob3.y)
  //drawSprites();
  bob1.display();
  bob2.display();
  roof.display();
  bob3.display();
  rope.display();
  rope1.display();
  //rope1.display()
  Engine.update(engine)
}



