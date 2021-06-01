//assigning variables
var cat, mouse;
var cat_Image, cat_1Image, cat_4Image;
var mouse_Image, mouse_1Image, mouse_4Image;
var bg_Image;


function preload() 
{
 
 console.log("preload");
 
 cat_Image = loadAnimation("images/cat2.png", "images/cat3.png");
 cat_1Image = loadAnimation("images/cat1.png");
 mouse_Image = loadAnimation("images/mouse2.png", "images/mouse3.png");
 mouse_1Image = loadImage("images/mouse1.png");
 cat_4Image = loadAnimation("images/cat4.png")
 mouse_4Image = loadImage("images/mouse4.png");
 bg_Image = loadImage("images/garden.png");

}

function setup() 
{

  createCanvas(1000, 800);

  mouse = createSprite(230, 600, 200, 2000);
  mouse.addAnimation("mouseAction", mouse_1Image);
  mouse.scale = 0.15;
  
  cat = createSprite(870, 590, 100, 100);
  cat.addAnimation("moveCat", cat_1Image);
  cat.scale = 0.2;

}

function draw() 
{

  background(bg_Image);

  if(cat.x - mouse.x < (cat.width - mouse.width)/2);

  if (cat.isTouching(mouse))
{

cat.addAnimation("catStopping", cat_4Image);
cat.changeAnimation("catStopping");
cat.velocityX = 0;

mouse.addAnimation("mouseStopping", mouse_4Image);
mouse.changeAnimation("mouseStopping");

}

drawSprites();
}

function keyPressed() 
{

if(keyCode === LEFT_ARROW)

{

  mouse.addAnimation("mouseTeasing", mouse_Image);
  mouse.changeAnimation("mouseTeasing");  
  mouse.frameDelay = 4;

  cat.addAnimation("catRunning", cat_Image);
  cat.changeAnimation("catRunning");
  cat.velocityX = -5;

}

}
