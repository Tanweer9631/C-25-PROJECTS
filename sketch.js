
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var btn2;

var angle=60;

var fan1
var fan2
var fan3
var fan4

var ball1
var ball2
var ball3
var ball4

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
 
   
   var ground_options ={
     isStatic: true
   };

   ball1= new Ball(100,200,10);

   ball2= new Ball(200,200,15);

   ball3= new Ball(300,200,20);

   ball4= new Ball(390,200,25);


   fan1= new Ground(50,370,50,30);

   fan2= new Ground(150,370,50,30);

   fan3= new Ground(250,370,50,30);

   fan4= new Ground(350,370,50,30);


  
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);


 
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  fan1.display();
  fan2.display();
  fan3.display();
  fan4.display();


 
 

  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}


  