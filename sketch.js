
var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,25);
  wall = createSprite(1200,200,thickness,height/2); 
  wall.shapeColor = (80,80,80);
  bullet.shapeColor = (1000,1000,1000);
}

function draw() {
  background(0,0,0); 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet.velocityX = speed;
  console.log("inside draw"); 
 
       if(hasCollided(bullet, wall))  {
         var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
         if(damage>10){
          wall.shapeColor= color(255,0,0);     
         }
         if(damage<10) {
           wall.shapeColor = color(0,255,0);
         }     


       }
    // if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    //   bullet.velocityX = 0;
    //   var deformation= 0.5 * weight * speed * speed /22509;

    //     if(deformation>8) {
    //       wall.shapeColor = color(255,0,0);
    //     }
    //     if(deformation<8 && deformation>5) {
    //       wall.shapeColor = color(230,230,0);
    //     }
    //     if(deformation<5) {
    //       wall.shapeColor = color(0,255,0);
    //     }
    // }
   drawSprites();
}


function reset()
{
  bullet.destroyEach();
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = 0;
  wall = createSprite(1000,200,60,200); 
}

function hasCollided(bullet, wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x; {
    return true
  } 
  return false;
}
