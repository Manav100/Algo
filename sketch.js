var a,b;

function setup() {
  createCanvas(800,400);
   a= createSprite(400, 200, 50, 50);
   b = createSprite(200,50,20,20)
   a.shapeColor = "orange"
   b.shapeColor = "orange"
}

function draw() {
  background(255,255,255);

  
  a.x = World.mouseX;
  a.y = World.mouseY;
  
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 )
  {
    a.shapeColor = "black"
    b.shapeColor = "black" 
  }
  else{
    a.shapeColor = "orange"
   b.shapeColor = "orange"
  }

  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2)
  {
    a.velocityX = a.velocityX*(-1)
    b.velocityX = b.velocityX*(-1)
  }

  if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 )
  {
    a.velocityY = a.velocityY*(-1)
    b.velocityY = b.velocityY*(-1)
  }
  drawSprites();
}