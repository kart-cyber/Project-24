
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options = {
		isStatic: true
	}

	

	ground = Bodies.rectangle(width / 2, 750, 800, 20, ground_options);
	World.add(world, ground);

	
	World.add(world, paper);




	Engine.run(engine);

	baseBlock = new Bblock(600, 690, 150, 10);
	leftBlock = new Sblock(680, 640, 10, 100);
	rightBlock = new Sblock(520, 640, 10, 100);
	paper1 = new paper(200,200);

}


function draw() {
	rectMode(CENTER);
	background(0);
	rect(ground.position.x, ground.position.y, 800, 20);

	baseBlock.display();
	leftBlock.display();
	rightBlock.display();
	paper1.display();
	//drawSprites();
	keyPressed();
	

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10, y:-20 });
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{ x: 10, y: 40 });
	}
}



