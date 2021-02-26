var obj1, obj2;

function setup() {
  createCanvas(1000,400);
  obj1=createSprite(50, 200, 50, 50);
  obj2=createSprite(900,200,50,100);
}

function draw() {
  background(255,255,255);  
  obj1.x=World.mouseX;
  obj1.y=World.mouseY;
  if(obj2.x-obj1.x<=obj1.width/2+obj2.width/2&&
    obj1.x-obj2.x<=obj1.width/2+obj2.width/2&&
    obj2.y-obj1.y<=obj1.height/2+obj2.height/2&&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2) {
    obj1.shapeColor="red";
    obj2.shapeColor="red";
  }
  else {
    obj1.shapeColor="green";
    obj2.shapeColor="green";
  }
  drawSprites();
}