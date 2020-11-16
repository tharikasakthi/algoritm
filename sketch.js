var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);

  movingRect=createSprite(200,300,100,40);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect=createSprite(300,300,40,100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

}

function draw() {
  background(0,0,0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //right - MovingRect HX   
if(movingRect.x-fixedRect.x <=  fixedRect.width/2 +  movingRect.width/2 && fixedRect.y-movingRect.y<= fixedRect.height/2+movingRect.height/2 && 
     fixedRect.x-movingRect.x<= movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y<= fixedRect.height/2+movingRect.height/2 ){

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";


}

else{

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}

 
  drawSprites();
} 




