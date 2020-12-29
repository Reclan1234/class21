var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);

}

function draw() {
  background("lightgreen");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(rect_touch(movingRect,gameObject1))
  {
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "purple";
    gameObject1.shapeColor = "purple";

  }

  drawSprites();
}


