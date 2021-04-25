const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var backgroundImage;
var ballImage;
var ringImage;
var engine,world;
var ring; 
var ball;
var ground;
var slingshot;



function preload(){
  backgroundImage=loadImage("BACKGROUND.jpg");
  ballImage=loadImage("BLUEBALL2.png");
  ringImage=loadImage("RING2.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
  
  ring=createSprite(width-300,height/2);
  ring.addImage(ringImage);
  ring.scale=0.3;
  ring.velocityY=8

  ball=new Ball(100,100,50);

  ground=new Ground();

  slingshot=new SlingShot(ball.body,{x:100,y:height-200});

  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  if (ring.y>height/2+185){
    ring.velocityY=-12.5
  }

  if(ring.y<height/2-185){
    ring.velocityY=+12.5
  }


  
  
   
  drawSprites();
  ball.display();
  slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
  slingshot.fly();
}
