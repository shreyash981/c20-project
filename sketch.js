var car,wall,speed,weight , deformation;


function setup() {
  createCanvas(1600,400);
speed  = random(50 , 100);
weight = random (90 ,100 )
car = createSprite (50 ,200 , 20 ,20 );
wall = createSprite (1500 ,200 , 30 ,height );
wall.shapeColor="BLUE";
//wall.shapeColor = color(80,80,80);
 car.velocityX = speed ;


}

function draw() {
  background(255,255,255);  
  
 if(wall.x-car.x  < car.width /2 + wall.width/ 2)  {
  car.velocityX = 0 ;
  deformation = 0.5 * weight * speed *speed /22500 ;


if(deformation < 100  ){
  car.shapeColor = "green" ;
}
else if(deformation <100 &&   deformation >180 ){
car.shapeColor ="yellow";
}
else if(deformation >180){
  car.shapeColor ="red";
 
}
}
  drawSprites();
}