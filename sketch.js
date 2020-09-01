var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  movingRect = createSprite(400, 200, 50, 30);
  fixedRect = createSprite(700, 200, 30, 50);

  // 50/2 + 30/2 = 25 + 15 = 40

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(255, 255, 255);

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if (
    movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2
  ) {
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;
  }
  drawSprites();
}
