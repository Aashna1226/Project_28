const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeOb, stoneOb, groundOb, launcherOb;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world, boy;
var launchingForce=100;


function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	stoneOb=new Stone(90,390,30);

	mango1=new Mango(480,210,25);
	mango2=new Mango(590,160,30);
	mango3=new Mango(540,190,30);
	mango4=new Mango(670,220,30);
	mango5=new Mango(700,240,30);
	mango6=new Mango(660,320,30);
	mango7=new Mango(580,300,30);
	mango8=new Mango(460,290,30);

	treeOb=new Tree(560,690,20,50);
	groundOb=new Ground(width/2, 700, width, 20);
	launcherOb= new Launcher(stoneOb.body,{x:128,y:530})

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  textSize(25);
  text("Press Space to get a second chance to play!",50,50);
  image(boy,100,470,200,300);


  treeOb.display();
  stoneOb.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneOb.display();
  

  groundOb.display();
  launcherOb.display();
  detectollision(stoneOb,mango1);
  detectollision(stoneOb,mango2);
  detectollision(stoneOb,mango3);
  detectollision(stoneOb,mango4);
  detectollision(stoneOb,mango5);
  detectollision(stoneOb,mango6);
  detectollision(stoneOb,mango7);
  detectollision(stoneOb,mango8);   
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneOb.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneOb.body, {x:235, y:420}) 
	  launcherOb.attach(stoneOb.body);
	}
  }

  function detectollision(lstone,lmango){
 	 mangoBodyPosition=lmango.body.position
 	 stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

