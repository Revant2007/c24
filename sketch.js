
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var box1,ground;

var pig1,pig2;

var log1,log2,log3,log4;

var bird1;

function setup() {
  
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(700,300,70,70);
  box2 = new Box(500,300,70,70);
  box3 = new Box(700,210,70,70);
  box4 = new Box(500,210,70,70);
 
  ground = new Ground(400,390);
 
  pig1 = new pig(600,300);
  pig2 = new pig(600,200);

  log1 = new Log(600,380,PI/2);

  bird1 = new Bird(100,100);
}

function draw() {
  
  background(0);  
  
  Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();

ground.display();

pig1.display();
pig2.display();


log1.display();

bird1.display();

  /*ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);*/
}