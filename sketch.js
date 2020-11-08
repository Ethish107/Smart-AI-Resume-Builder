var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var package_option;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var boxLeftBody,boxBase,boxRightBody;
 var boxLeft,boxMiddle,boxRight;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,	{restitution:0.4,isStatic:false});
	Matter.Body.setStatic(packageBody,true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	var boxPosition=width/2-100
 	var boxY=610;
	
	 boxLeftBody = createSprite(boxPosition,boxY,20,100);
	 boxLeftBody.shapeColor = "red";

	 boxLeft = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	 World.add(world,boxLeft);

	 boxRightBody = createSprite(boxPosition+200,boxY,20,100);
	 boxRightBody.shapeColor = "red";

	 boxRight = Bodies.rectangle(boxPosition+200,boxY,20,100,{isStatic:true});
	 World.add(world,boxRight);

	 boxBase = createSprite(boxPosition+100, boxY+40, 200,20);
	 boxBase.shapeColor = "red";

	 boxMiddle = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true});
	 World.add(world,boxMiddle);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
	 keyPressed();
}

function keyPressed() {
 if (keyDown(LEFT_ARROW)) {
	helicopterSprite.x=helicopterSprite.x-20;    
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation)
    
  } else if (keyDown(RIGHT_ARROW)) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }else if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



