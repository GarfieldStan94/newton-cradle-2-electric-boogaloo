const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse= Matter.Mouse;

const MouseConstraint= Matter.MouseConstraint;

var roof, ball1, ball2, ball3, ball4, ball5, string1,string2,string3,string4,string5;
var mConstraint;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth -100, windowHeight -50);
	engine = Engine.create();
	world = engine.world;

	let canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();
	let options = {
	mouse: canvasMouse
	};

 mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint);

	roof = new Roof(800,height/4,width/7,20);
	
	pendulum1 = new Pendulum(350,450,"purple");
	pendulum2 = new Pendulum(400,450,"purple");
	pendulum3 = new Pendulum(450,450,"purple");
	pendulum4 = new Pendulum(500,450,"purple");
	pendulum5 = new Pendulum(550,450,"purple");
    
	string1 = new String(pendulum1.body,{x:350,y:200});
	string2 = new String(pendulum2.body,{x:400,y:200});
	string3 = new String(pendulum3.body,{x:450,y:200});
	string4 = new String(pendulum4.body,{x:500,y:200});
	string5 = new String(pendulum5.body,{x:550,y:200});
	
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
 
}


function mouseDragged() {
Matter.Body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}


