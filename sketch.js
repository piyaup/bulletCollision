
var bullet,wall,speed,weight,thickness;
var bulletHit=true;

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

 // this for fast speed

      // if(hasCollided(bullet, wall) && bulletHit )  {
      //   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      //   console.log("inside if stmt damage :" + damage);
      //   if(damage>10){
      //   wall.shapeColor= color(255,0,0);     
      //   }
      //   if(damage<10) {
      //     wall.shapeColor = color(0,255,0);
      //   }     
      //   bulletHit = false;
      // }

       // this for slower speed

       if(hasCollided(bullet, wall) && bulletHit )  {
         var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
          console.log("inside if stmt damage :" + damage);
         if(damage>0.08){
          wall.shapeColor= color(255,0,0);     
         }
         if(damage<0.08) {
           wall.shapeColor = color(0,255,0);
         }     
         bulletHit = false;
       }
    
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
  wallLeftEdge=wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    bullet.velocityX = 0;
    return true
  } 
  return false;
}
