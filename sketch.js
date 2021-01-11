var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 400, 50, 80);
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";
gameObject1.debug=true;
gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";
gameObject2.debug=true;
gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";
gameObject3.debug=true;
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";
gameObject4.debug=true;

movingRect.velocityY = -5;
fixedRect.velocityY = +5;

}

function draw() {

  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
